import styles from "./app-contact-styles.css" assert { type: "css" }
import template from "./app-contact-template.js"

class AppContactElement extends HTMLElement {
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

export default function () { customElements.define("app-contact", AppContactElement) }
