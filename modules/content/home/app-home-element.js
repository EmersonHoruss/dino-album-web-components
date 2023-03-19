import styles from "./app-home-styles.css" assert { type: "css" }
import template from "./app-home-template.js"

class AppHomeElement extends HTMLElement {
    items = [
        "assets/img/companies/adidas.png",
        "assets/img/companies/amazon.png",
        "assets/img/companies/apple.png",
        "assets/img/companies/bmw.png",
        "assets/img/companies/cisco.png",
        "assets/img/companies/coca-cola.png",
        "assets/img/companies/facebook.png",
        "assets/img/companies/fast-delivery-fast.png",
        "assets/img/companies/google.png",
        "assets/img/companies/gucci.png",
        "assets/img/companies/ibm.png",
        "assets/img/companies/kfc.png",
        "assets/img/companies/mcdonald.png",
        "assets/img/companies/microsoft.png",
        "assets/img/companies/nasa.png",
        "assets/img/companies/netflix.png",
        "assets/img/companies/nokia.png",
        "assets/img/companies/pepsi.png",
        "assets/img/companies/ryzen.png",
        "assets/img/companies/samsung.png",
        "assets/img/companies/shell.png",
        "assets/img/companies/sony.png",
        "assets/img/companies/starbucks.png",
        "assets/img/companies/tiktok.png",
        "assets/img/companies/toyota.png",
        "assets/img/companies/xbox.png",
    ]

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets.push(styles)
        const html = template.content.cloneNode((true))
        html.querySelector("app-carousel").setAttribute("items", JSON.stringify(this.items))
        this.shadowRoot.appendChild(html)
    }
}

export default function () { customElements.define("app-home", AppHomeElement) }