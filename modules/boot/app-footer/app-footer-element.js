import shared from "../../shared/shared.css" assert {type: "css"}
import styles from "./app-footer-styles.css" assert { type: "css" }
import template from "./app-footer-template.js"

class AppFooterElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets.push(styles)
        this.shadowRoot.adoptedStyleSheets.push(shared)
        const html = template.content.cloneNode((true))
        this.shadowRoot.appendChild(html)
    }
}

export default function () { customElements.define("app-footer", AppFooterElement) }
