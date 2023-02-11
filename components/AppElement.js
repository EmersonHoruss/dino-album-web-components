class AppElement extends HTMLElement {
    constructor() {
        super()
        console.log("The component has next attributes: ", this.getAttributeNames())
        console.log("Value is: ", this.getAttribute("value"))
        console.log("Exist isEnabled attribute?: ", this.hasAttribute('isEnabled'))
    }
}

customElements.define("app-element", AppElement)
