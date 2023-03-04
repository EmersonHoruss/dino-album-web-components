import styles from "./app-title-styles.css" assert { type: "css" }
import template from "./app-title-template.js"

class AppTitleElement extends HTMLElement {

}

export default function () { customElements.define("app-title", AppTitleElement) }
