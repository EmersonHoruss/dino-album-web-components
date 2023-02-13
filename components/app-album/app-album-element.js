import styles from "./app-album-styles.css" assert { type: "css" }
import template from "./app-album-template.js"
import data from "./app-album-data.js"
import { ComponentUtils } from "../../utils/component-utils.js"

class AppAlbumElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets.push(styles)

        this.#setHtml()
    }

    #setHtml() {
        const html = this.#buildHtml()

        this.shadowRoot.appendChild(html)
    }

    #buildHtml() {
        const html = template.content.cloneNode((true))

        data.forEach(
            cardProperties => {
                const cardComponent = this.#getCardComponent(cardProperties)
                html.appendChild(cardComponent)
            }
        )

        return html
    }

    #getCardComponent(properties) {
        const componentCard = new ComponentUtils("app-card", properties)

        return componentCard.getComponent()
    }
}

customElements.define("app-album", AppAlbumElement)
