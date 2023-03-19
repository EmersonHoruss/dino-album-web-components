export function cleanChildren(element) {
    while (existChildren(element)) {
        element.removeChild(element.children[0])
    }
}

function existChildren(element) {
    return !!element.children.length
}
