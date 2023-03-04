import styles from "./app-works-styles.css" assert { type: "css" }
import template from "./app-works-template.js"

class AppWorksElement extends HTMLElement {
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

export default function () { customElements.define("app-works", AppWorksElement) }
