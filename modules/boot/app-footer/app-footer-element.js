
import styles from "./app-footer-styles.css" assert { type: "css" }
import template from "./app-footer-template.js"

class AppFooterElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets.push(styles)
        const html = template.content.cloneNode((true))
        this.shadowRoot.appendChild(html)
    }
}

export default function () { customElements.define("app-footer", AppFooterElement) }
