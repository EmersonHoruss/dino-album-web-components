import { cleanChildren } from "../../../utils/general-utils.js"
import styles from "./app-carousel-styles.css" assert { type: "css" }
import template from "./app-carousel-template.js"

class AppCarouselElement extends HTMLElement {
    #items = []

    #configurations = [
        {
            minContentWidth: 200,
            maxContentWidth: 639,
            itemsNumber: 3
        },
        {
            minContentWidth: 640,
            maxContentWidth: 1007,
            itemsNumber: 4
        },
        {
            minContentWidth: 1008,
            maxContentWidth: 4000,
            itemsNumber: 5
        }
    ]

    #sizeImg = "64px"

    #autoPlayRef = null

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets.push(styles)
        const html = template.content.cloneNode((true))
        html.querySelector("#back").addEventListener("click", this)
        html.querySelector("#next").addEventListener("click", this)
        this.shadowRoot.appendChild(html);

        this.#appendItemsToContent()
        window.addEventListener("resize", () => {
            this.#cleanContent()
            this.#appendItemsToContent()
        })
        this.#autoplay()
    }

    #appendItemsToContent(pivot = 0, direction = "next") {
        const itemsNumber = this.#getItemsNumber()
        const itemWidth = parseInt(this.#getContentWidth() / itemsNumber)
        const itemsIndex = this.#getItemsIndex(pivot, direction)

        for (let i = 0; i < itemsIndex.length; i++) {
            this.#appendItemToContent(itemsIndex[i], itemWidth)
        }
    }

    #getContentWidth() {
        const contentElement = this.shadowRoot.querySelector("#content")
        return contentElement.offsetWidth
    }

    #cleanContent() {
        const contentElement = this.shadowRoot.querySelector("#content")
        cleanChildren(contentElement)
    }

    #appendItemToContent(i, itemWidth) {
        const contentElement = this.shadowRoot.querySelector("#content")
        const item = document.createElement("div")
        item.style.width = itemWidth + "px"
        item.style.display = "flex"
        item.style.justifyContent = "center"
        item.style.alignItems = "center"

        const img = document.createElement("img")
        img.setAttribute("src", this.#items[i])
        img.setAttribute("width", this.#sizeImg)
        img.setAttribute("height", this.#sizeImg)

        item.appendChild(img)

        contentElement.appendChild(item)
    }

    #getItemsIndex(pivot, direction) {
        const itemsNumber = this.#getItemsNumber()
        const itemsIndex = []
        const maxLength = this.#items.length - 1
        const minLength = 0

        if (direction === "next") {
            for (let i = 0; i < itemsNumber; i++) {
                let index = pivot + i
                if (index > maxLength) {
                    index = index - this.#items.length
                }

                itemsIndex.push(index)
            }
        }

        if (direction === "back") {
            for (let i = 0; i < itemsNumber; i++) {
                let index = pivot + i
                if (index < minLength) {
                    index = this.#items.length + index
                }

                if (index >= this.#items.length) {
                    index = index - this.#items.length
                }

                itemsIndex.push(index)
            }
        }

        return itemsIndex
    }

    #getItemsNumber() {
        const contentWidth = this.#getContentWidth()
        for (let i = 0; i < this.#configurations.length; i++) {
            const configuration = this.#configurations[i];
            if (contentWidth >= configuration.minContentWidth && contentWidth <= configuration.maxContentWidth) {
                return configuration.itemsNumber
            }
        }
        return 0
    }

    handleEvent(event) {
        const id = event.target.getAttribute("id")
        switch (id) {
            case "back":
                this.#back()
                break;

            case "next":
                this.#next()
                break;

            default:
                break;
        }
    }

    #back() {
        const nextPivot = this.#getPivot() - 1
        this.#cleanContent()
        this.#appendItemsToContent(nextPivot, "back")
    }

    #next() {
        const nextPivot = this.#getPivot() + 1
        this.#cleanContent()
        this.#appendItemsToContent(nextPivot, "next")
    }

    #getPivot() {
        const contentElement = this.shadowRoot.querySelector("#content")
        const firstItem = contentElement.children[0]
        const img = firstItem.children[0]
        const srcImg = img.getAttribute("src")

        return this.#items.findIndex(e => e === srcImg)
    }

    #autoplay() {
        this.#autoPlayRef = setInterval(() => {
            this.#next()
        }, 3000);
    }

    disconnectedCallback() {
        if (this.#autoPlayRef) {
            clearInterval(this.#autoPlayRef)
        }
    }

    static get observedAttributes() {
        return ["items"]
    }

    attributeChangedCallback(name, old, now) {
        if (name === "items") {
            this.#items = JSON.parse(now)
        }
    }
}

export default function () { customElements.define("app-carousel", AppCarouselElement) }
