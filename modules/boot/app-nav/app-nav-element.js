import styles from "./app-nav-styles.css" assert { type: "css" }
import template from "./app-nav-template.js"

class AppNavElement extends HTMLElement {
    currentPath = ""
    oldPath = ""

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
        this.shadowRoot.appendChild(html)
        this.setSelectedItem()
    }

    handleEvent(event) {
        if (event.type === "click") {
            const path = event.target.getAttribute("path")
            const eventComponent = new CustomEvent("app-nav:clicked-item", {
                detail: {
                    path
                },
                bubbles: true,
                composed: true
            })

            this.dispatchEvent(eventComponent)
        }
    }

    static get observedAttributes() {
        return ["current-path"]
    }

    attributeChangedCallback(name, old, now) {
        this.currentPath = now
        this.oldPath = old

        if (name === "current-path") {
            this.setSelectedItem()
        }
    }

    setSelectedItem() {
        const shouldSelect = this.shadowRoot.querySelector(`[path='${this.currentPath}']`)
        const shouldUnselect = this.shadowRoot.querySelector(`[path='${this.oldPath}']`)

        if (shouldUnselect) {
            shouldUnselect.classList.remove("selected")
        }

        if (shouldSelect) {
            shouldSelect.classList.add("selected")
        }
    }

}

export default function () { customElements.define("app-nav", AppNavElement) }
