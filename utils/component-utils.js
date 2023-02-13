export class ComponentUtils {
    component = null

    constructor(tag, properties) {
        this.component = document.createElement(tag)
        this.#setProperties(properties)
    }

    #setProperties(properties) {
        const objectAsArray = Object.entries(properties)

        for (const [key, value] of objectAsArray) {
            this.component.setAttribute(key, value)
        }
    }

    getComponent() {
        return this.component
    }
}