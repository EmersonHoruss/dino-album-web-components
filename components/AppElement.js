class AppElement extends HTMLElement {
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
}

customElements.define("app-element", AppElement)
