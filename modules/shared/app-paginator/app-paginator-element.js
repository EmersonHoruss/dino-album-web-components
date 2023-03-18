import styles from "./app-paginator-styles.css" assert { type: "css" }
import template from "./app-paginator-template.js"

class AppPaginatorElement extends HTMLElement {
    #currentPage = 1
    #totalPages = 0
    #itemsPerPage = 5
    #totalItems = 0

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets.push(styles)
        const html = template.content.cloneNode((true))
        html.querySelectorAll("button").forEach(element => {
            element.addEventListener("click", this)
        });
        html.querySelectorAll("select").forEach(element => {
            element.addEventListener("click", this)
        });
        this.shadowRoot.appendChild(html);

        this.#updateContentRange()
    }

    handleEvent(event) {
        if (event.type === "click") {
            const elementHTML = event.target
            const elementId = elementHTML.getAttribute("id")
            let detail = {}

            switch (elementId) {
                case "items-per-page":
                    const selectedItempPerPage = parseInt(elementHTML.value)
                    if (this.#itemsPerPage !== selectedItempPerPage) {
                        this.#itemsPerPage = selectedItempPerPage
                        this.#currentPage = 1
                        this.#totalPages = this.#calculateTotalPages()
                    } 
                    break;

                case "start":
                    this.#currentPage = 1
                    break;

                case "before":
                    const beforePage = this.#currentPage - 1
                    if (beforePage !== 0) {
                        this.#currentPage = beforePage
                    }
                    break;

                case "next":
                    const nextPage = this.#currentPage + 1
                    if (nextPage <= this.#totalPages) {
                        this.#currentPage = nextPage
                    }
                    break;

                case "end":
                    this.#currentPage = this.#totalPages
                    break;
            }

            this.#updateContentRange()

            this.#emitEvent()
        }
    }

    #updateContentRange() {
        this.shadowRoot.querySelector("#range").innerHTML = `Página ${this.#currentPage} de ${this.#totalPages}`;
    }

    static get observedAttributes() {
        return ["total-items"]
    }

    attributeChangedCallback(name, old, now) {
        if (name === "total-items") {
            this.#totalItems = parseInt(now)
            this.#totalPages = this.#calculateTotalPages()
            this.#emitEvent()
        }
    }

    #emitEvent() {
        const eventComponent = new CustomEvent(`app-paginator`, {
            detail: {
                itemsPerPage: this.#itemsPerPage,
                currentPage: this.#currentPage
            },
            bubbles: true,
            composed: true
        })

        this.dispatchEvent(eventComponent)
    }

    #calculateTotalPages() {
        const q = parseInt(this.#totalItems / this.#itemsPerPage)
        const r = this.#totalItems % this.#itemsPerPage

        if (r) {
            return q + 1
        }

        return q
    }
}

export default function () { customElements.define("app-paginator", AppPaginatorElement) }


// currentPage
// totalPages
// itemsPerPage