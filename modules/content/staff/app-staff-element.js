import styles from "./app-staff-styles.css" assert { type: "css" }
import shared from "../../shared/shared.css" assert { type: "css" }
import template from "./app-staff-template.js"
import albumData from "../../../data/album-data.js"
import { cleanChildren } from "../../../utils/general-utils.js"

class AppStaffElement extends HTMLElement {
    #staff = albumData

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets.push(styles)
        this.shadowRoot.adoptedStyleSheets.push(shared)
        const html = template.content.cloneNode((true))
        // html.querySelector("#staff").appendChild(appAlbum)
        html.querySelector("app-paginator").setAttribute("total-items", this.#staff.length)

        document.addEventListener("app-paginator", this);

        this.shadowRoot.appendChild(html)
    }

    handleEvent(event) {
        if (event.type === "app-paginator") {
            const itemsPerPage = event.detail.itemsPerPage
            const currentPage = event.detail.currentPage
            this.#cleanStaff()
            this.#loadStaff(itemsPerPage, currentPage)
        }
    }

    #cleanStaff() {
        const staffElement = this.shadowRoot.querySelector("#staff")
        cleanChildren(staffElement)
    }

    #loadStaff(itemsPerPage, currentPage) {
        const paginatedStaff = this.#paginatedStaff(itemsPerPage, currentPage)
        const staffElement = this.shadowRoot.querySelector("#staff")
        const appAlbum = document.createElement("app-album")
        appAlbum.setAttribute("album", JSON.stringify(paginatedStaff))
        staffElement.appendChild(appAlbum)
    }

    #paginatedStaff(itemsPerPage, currentPage) {
        const end = currentPage * itemsPerPage
        const start = end - itemsPerPage

        return this.#staff.slice(start, end)
    }
}

export default function () { customElements.define("app-staff", AppStaffElement) }
