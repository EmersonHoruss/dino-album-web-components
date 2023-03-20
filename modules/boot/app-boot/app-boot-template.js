const template = document.createElement("template")

template.innerHTML = `
<div id="layout">
    <app-title></app-title>
    <div id="wrapper-content">
        <div id="content"></div>
        <app-footer></app-footer>
    </div>
    <app-nav current-path=""></app-nav>
</div>
`

export default template
