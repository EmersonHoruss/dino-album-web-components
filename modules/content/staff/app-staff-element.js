import styles from "./app-staff-styles.css" assert { type: "css" }
import template from "./app-staff-template.js"
import albumData from "../../../data/album-data.js"

class AppStaffElement extends HTMLElement {
    #staff = albumData

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets.push(styles)
        const html = template.content.cloneNode((true))
        const appAlbum = document.createElement("app-album")
        appAlbum.setAttribute("album", JSON.stringify(this.#staff))
        html.appendChild(appAlbum)
        html.querySelector("app-paginator").setAttribute("total-items", this.#staff.length)
        this.shadowRoot.appendChild(html)
    }


}

export default function () { customElements.define("app-staff", AppStaffElement) }
