import styles from "./app-paginator-styles.css" assert { type: "css" }
import template from "./app-paginator-template.js"

class AppPaginatorElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets.push(styles)
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

export default function () { customElements.define("app-paginator", AppPaginatorElement) }
