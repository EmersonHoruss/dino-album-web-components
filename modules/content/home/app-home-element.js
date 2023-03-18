import styles from "./app-home-styles.css" assert { type: "css" }
import template from "./app-home-template.js"

class AppHomeElement extends HTMLElement {
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

export default function () { customElements.define("app-home", AppHomeElement) }