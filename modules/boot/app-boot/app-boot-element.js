import styles from "./app-boot-styles.css" assert { type: "css" }
import template from "./app-boot-template.js"
import { Router } from "../router.js";
import { getElement } from "../routes.js";

class AppBootElement extends HTMLElement {
    #router = null

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.#router = new Router()
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets.push(styles)
        const html = template.content.cloneNode((true))
        html.querySelector("app-nav").setAttribute("current-path", location.pathname)
        this.shadowRoot.appendChild(html)

        document.addEventListener("app-nav:clicked-item", this);

        this.#loadContent(location.pathname)

        window.addEventListener("popstate", event => {
            const path = event.state.path
            this.#router.handlerPath(path, false)
            this.shadowRoot.querySelector("app-nav").setAttribute("current-path", path)
            this.#cleanNodes()
            this.#loadContent(path)
        })
    }

    handleEvent(event) {
        if (event.type === "app-nav:clicked-item") {
            const path = event.detail.path
            this.#router.handlerPath(path)
            this.shadowRoot.querySelector("app-nav").setAttribute("current-path", path)
            this.#cleanNodes()
            this.#loadContent(path)
        }
    }

    #loadContent(path) {
        const element = getElement(path)
        const component = document.createElement(element)
        component.style["display"] = "block"
        component.style["width"] = "100%"
        component.style["height"] = "100%"
        component.style["overflow-y"] = "scroll"
        this.shadowRoot.getElementById("content").appendChild(component)
    }

    #cleanNodes() {
        const content = this.shadowRoot.getElementById("content")
        const children = content.children

        if (children.length) {
            for (let i = 0; i < children.length; i++) {
                content.removeChild(content.children[i])
            }
        }
    }
}

export default function () { customElements.define("app-boot", AppBootElement) }
