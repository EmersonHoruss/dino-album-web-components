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

        window.addEventListener("popstate", event => {
            const path = event.state.path
            this.#router.handlerPath(path, false)
            this.shadowRoot.querySelector("app-nav").setAttribute("current-path", path)
            this.#loadContent(path)
        })
    }

    handleEvent(event) {
        if (event.type === "app-nav:clicked-item") {
            const path = event.detail.path
            this.#router.handlerPath(path)
            this.shadowRoot.querySelector("app-nav").setAttribute("current-path", path)
            this.#loadContent(path)
        }
    }

    #loadContent(path) {
        const element = getElement(path)
        const component = document.createElement(element)
        this.shadowRoot.getElementById("content").appendChild(component)
    }
}

export default function () { customElements.define("app-boot", AppBootElement) }
