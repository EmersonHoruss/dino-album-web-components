class AppElement extends HTMLElement {
    name = this.getAttribute("name") || ""

    constructor() {
        super()
        console.log("The component has next attributes: ", this.getAttributeNames())
        console.log("Value is: ", this.getAttribute("value"))
        console.log("Exist isEnabled attribute?: ", this.hasAttribute('isEnabled'))
    }

    static get observedAttribute() {
        return ["value", "isEnabled"]
        // return ["value", "is-enabled"]
    }

    // attributeChangedCallback(name, old, now) {
    attributeChangedCallback(prop, old, now) {
        console.log(`The attribute(component's property) ${prop} has been changed from ${old} to ${now}`)
    }

    connectedCallBack() {
        this.innerHTML = /* html */ `
        <div class="container">
            <div class="name">${this.name}</div>
        </div>
        `
    }
}

customElements.define("app-element", AppElement)
