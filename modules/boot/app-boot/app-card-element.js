import styles from "./app-card-styles.css" assert { type: "css" }
import template from "./app-card-template.js"

class AppCardElement extends HTMLElement {
    img = this.getAttribute("img")
    title = this.getAttribute("title")
    description = this.getAttribute("description")

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets.push(styles)
        const html = template.content.cloneNode((true))
        html.querySelector("img").setAttribute('src', this.img)
        html.querySelector("img").addEventListener("click", this)
        html.querySelector("h1").textContent = this.title
        html.querySelector("p").textContent = this.description
        this.shadowRoot.appendChild(html)
    }

    static get observedAttributes() {
        return ["img", "title", "description"]
    }

    attributeChangedCallback(name, old, now) {
        // console.log(`${name}, ${old}, ${now}`)
    }

    handleEvent(event) {
        if (event.type === "click") {
            this.showAlert()
        }
    }

    showAlert() {
        alert("img clicked")
    }
}

customElements.define("app-card", AppCardElement)
