import styles from "./app-staff-styles.css" assert { type: "css" }
import shared from "../../shared/shared.css" assert { type: "css" }
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
        this.shadowRoot.adoptedStyleSheets.push(shared)
        const html = template.content.cloneNode((true))
        const appAlbum = document.createElement("app-album")
        appAlbum.setAttribute("album", JSON.stringify(this.#staff))
        html.querySelector("#staff").appendChild(appAlbum)
        html.querySelector("app-paginator").setAttribute("total-items", this.#staff.length)

        document.addEventListener("app-paginator:items-per-page", this);
        document.addEventListener("app-paginator:start", this);
        document.addEventListener("app-paginator:before", this);
        document.addEventListener("app-paginator:next", this);
        document.addEventListener("app-paginator:end", this);

        this.shadowRoot.appendChild(html)
    }

    handleEvent(event) {
        console.log("asdfasdf")
        switch (event.type) {
            case "app-paginator:items-per-page":
                console.log(event.detail)
                break;

            case "app-paginator:start":
                console.log(event.detail)
                break;

            case "app-paginator:before":
                console.log(event.detail)
                break;

            case "app-paginator:next":
                console.log(event.detail)
                break;

            case "app-paginator:end":
                console.log(event.detail)
                break;

            default:
                break;
        }
    }
}

export default function () { customElements.define("app-staff", AppStaffElement) }
