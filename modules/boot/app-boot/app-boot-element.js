import styles from "./app-boot-styles.css" assert { type: "css" }
import shared from "../../shared/shared.css" assert { type: "css" }
import template from "./app-boot-template.js"
import { Router } from "../router.js";
import { getElement } from "../routes.js";
import { cleanChildren } from "../../../utils/general-utils.js";

class AppBootElement extends HTMLElement {
    #router = null
    #isOpenNav = true

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.#router = new Router()
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets.push(styles)
        this.shadowRoot.adoptedStyleSheets.push(shared)
        const html = template.content.cloneNode((true))
        html.querySelector("app-nav").setAttribute("current-path", location.pathname)
        this.shadowRoot.appendChild(html)

        document.addEventListener("app-nav:clicked-item", this);
        document.addEventListener("app-header:clicked-toggle-nav", this);

        this.#loadContent(location.pathname)

        window.addEventListener("popstate", event => {
            const path = event.state.path
            this.#router.handlerPath(path, false)
            this.shadowRoot.querySelector("app-nav").setAttribute("current-path", path)
            this.#cleanContent()
            this.#loadContent(path)
        })
    }

    handleEvent(event) {
        if (event.type === "app-nav:clicked-item") {
            const path = event.detail.path
            this.#router.handlerPath(path)
            this.shadowRoot.querySelector("app-nav").setAttribute("current-path", path)
            this.#cleanContent()
            this.#loadContent(path)
        }

        if (event.type === "app-header:clicked-toggle-nav") {
            if (this.#isOpenNav) { console.log("close nav"); this.#closeNav() }
            if (!this.#isOpenNav) { console.log("open nav"); this.#openNav() }

            this.#isOpenNav = !this.#isOpenNav
        }
    }

    #closeNav() {
        this.shadowRoot.querySelector("#layout").setAttribute("class", "closed-nav-layout")
        this.shadowRoot.querySelector("app-nav").setAttribute("class", "no-nav")
    }

    #openNav() {
        this.shadowRoot.querySelector("#layout").setAttribute("class", "")
        this.shadowRoot.querySelector("app-nav").setAttribute("class", "")
    }

    #loadContent(path) {
        const element = getElement(path)
        const component = document.createElement(element)
        component.style["display"] = "block"
        component.style["width"] = "100%"
        component.style["height"] = "100%"
        this.shadowRoot.getElementById("content").appendChild(component)
    }

    #cleanContent() {
        const contentElement = this.shadowRoot.getElementById("content")
        cleanChildren(contentElement)
    }
}

export default function () { customElements.define("app-boot", AppBootElement) }
