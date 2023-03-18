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

        this.#updateContentRange()
    }

    handleEvent(event) {
        
    }

    static get observedAttributes() {
        return ["total-items"]
    }

    attributeChangedCallback(name, old, now) {
        if (name === "total-items") {
            this.#totalItems = parseInt(now)
            this.#totalPages = this.#calculateTotalPages()
        }
    }

}

export default function () { customElements.define("app-paginator", AppPaginatorElement) }
