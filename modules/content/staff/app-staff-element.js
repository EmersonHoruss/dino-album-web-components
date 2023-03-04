import styles from "./app-staff-styles.css" assert { type: "css" }
import template from "./app-staff-template.js"

class AppStaffElement extends HTMLElement {
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

export default function () { customElements.define("app-staff", AppStaffElement) }
