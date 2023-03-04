import "./modules/boot/boot-module.js"
import "./modules/content/content-module.js"


const childTemplate = document.createElement("template")
childTemplate.innerHTML = `
<div>Child</div>
<p>Color: </p>
<span id="color"></span>
<button type="button" id="more">More</button>
<button type="button" id="buy">Buy</button>
`
class ChildElement extends HTMLElement {
    #defaultColor = "red"

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        const html = childTemplate.content.cloneNode((true))

        const buyButton = html.querySelector("#buy")
        const moreButton = html.querySelector("#more")

        const color = html.querySelector("#color")
        color.innerHTML = this.#defaultColor

        buyButton.addEventListener("click", e => console.log("buy"))
        moreButton.addEventListener("click", e => console.log("more"))

        this.shadowRoot.appendChild(html)
    }

    static get observedAttributes() {
        return ["color"]
    }

    attributeChangedCallback(name, old, now) {
        switch (name) {
            case "color":
                this.#updateColor(now)
                break;

            default:
                break;
        }
    }

    #updateColor(now) {
        const color = this.shadowRoot.querySelector("#color")
        if (color) {
            color.textContent = now
        }
    }
}

customElements.define("app-child", ChildElement)



const parentTemplate = document.createElement("template")
parentTemplate.innerHTML = `
<div>Parent</div>
<p># Clicks Buy Button: </p>
<span id="number-buy"></span>
<p># Clicks More Button: </p>
<span id="number-more"></span>
<br>
<button type="button" id="blue">Blue</button>
<button type="button" id="yellow">Yellow</button>
<button type="button" id="red">Red</button>
<br>
<br>
<br>
<br>
<br>
<br>
<app-child color=""></app-child>
<br>
<br>
<app-child color=""></app-child>
`
class ParentElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        const html = parentTemplate.content.cloneNode((true))

        const numberBuy = html.querySelector("#number-buy")
        const numberMore = html.querySelector("#number-more")

        numberBuy.innerHTML = 0
        numberMore.innerHTML = 0

        const blueButton = html.querySelector("#blue")
        const yellowButton = html.querySelector("#yellow")
        const redButton = html.querySelector("#red")

        blueButton.addEventListener("click", e => this.#managerChildColor("blue"))
        yellowButton.addEventListener("click", e => this.#managerChildColor("yellow"))
        redButton.addEventListener("click", e => this.#managerChildColor("red"))

        this.shadowRoot.appendChild(html)
    }

    #managerChildColor(color) {
        const childs = this.shadowRoot.querySelectorAll("app-child")

        for (let i = 0; i < childs.length; i++) {
            const child = childs[i];
            child.setAttribute("color", color)
        }
    }
}

customElements.define("app-parent", ParentElement)