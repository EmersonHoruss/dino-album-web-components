export function cleanChildren(element) {
    const children = element.children

    if (children.length) {
        for (let i = 0; i < children.length; i++) {
            element.removeChild(element.children[i])
        }
    }
}