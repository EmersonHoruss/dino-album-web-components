import styles from "./app-home-styles.css" assert { type: "css" }
import shared from "../../shared/shared.css" assert {type: "css"}
import template from "./app-home-template.js"
import { companies } from "../../../data/companies-data.js"
import { lotties } from "../../../data/lotties-data.js"

class AppHomeElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets.push(styles)
        this.shadowRoot.adoptedStyleSheets.push(shared)
        const html = template.content.cloneNode((true))
        html.querySelector("#about").querySelector("lottie-player").setAttribute("src", lotties.about)
        html.querySelector("#founder").querySelector("lottie-player").setAttribute("src", lotties.founder)
        html.querySelector("#clients").querySelector("lottie-player").setAttribute("src", lotties.clients)
        html.querySelector("app-carousel").setAttribute("items", JSON.stringify(companies))
        this.shadowRoot.appendChild(html)
    }
}

export default function () { customElements.define("app-home", AppHomeElement) }