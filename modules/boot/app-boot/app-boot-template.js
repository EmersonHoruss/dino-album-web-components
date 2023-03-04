const template = document.createElement("template")

template.innerHTML = `
<div id="layout">
    <app-title></app-title>
    <div id="content"></div>
    <app-nav current-path=""></app-nav>
</div>
`

export default template
