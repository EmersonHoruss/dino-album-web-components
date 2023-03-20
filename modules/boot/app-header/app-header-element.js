import shared from "../../shared/shared.css" assert { type: "css" }
import styles from "./app-header-styles.css" assert { type: "css" }
import template from "./app-header-template.js"

class AppHeaderElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets.push(styles)
        this.shadowRoot.adoptedStyleSheets.push(shared)
        const html = template.content.cloneNode((true))
        this.shadowRoot.appendChild(html);
    }

    handleEvent(event) {
    }

    static get observedAttributes() {
        return []
    }

    attributeChangedCallback(name, old, now) {
    }
}

export default function () { customElements.define("app-header", AppHeaderElement) }
