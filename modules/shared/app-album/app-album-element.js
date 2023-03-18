import styles from "./app-album-styles.css" assert { type: "css" }
import template from "./app-album-template.js"
import { ComponentUtils } from "../../../utils/component-utils.js"

class AppAlbumElement extends HTMLElement {
    #album = []

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

        this.#album.forEach(
            card => {
                const appCard = document.createElement("app-card")
                appCard.setAttribute("card", JSON.stringify(
                    {
                        img: card.img,
                        title: card.title,
                        description: card.description
                    }
                ))
                html.appendChild(appCard)
            }
        )

        return html
    }

    static get observedAttributes() {
        return ["album"]
    }

    attributeChangedCallback(name, old, now) {
        if (name === "album") {
            this.#album = JSON.parse(now)
        }
    }
}

export default function () { customElements.define("app-album", AppAlbumElement) }
