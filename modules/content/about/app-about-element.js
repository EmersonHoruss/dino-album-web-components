import styles from "./app-about-styles.css" assert { type: "css" }
import template from "./app-about-template.js"

class AppAboutElement extends HTMLElement {
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

export default function () { customElements.define("app-about", AppAboutElement) }