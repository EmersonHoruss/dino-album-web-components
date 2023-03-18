import styles from "./app-card-styles.css" assert { type: "css" }
import template from "./app-card-template.js"

class AppCardElement extends HTMLElement {
    #img = ""
    #title = ""
    #description = ""

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets.push(styles)
        const html = template.content.cloneNode((true))
        html.querySelector("#img").setAttribute('src', this.img)
        html.querySelector("#title").textContent = this.title
        html.querySelector("#description").textContent = this.description
        this.shadowRoot.appendChild(html)
    }

    static get observedAttributes() {
        return ["card"]
    }

    attributeChangedCallback(name, old, now) {
        if (name === "card") {
            const card = JSON.parse(now)
            this.img = card.img
            this.title = card.title
            this.description = card.description
        }
    }
}

export default function () { customElements.define("app-card", AppCardElement) }
