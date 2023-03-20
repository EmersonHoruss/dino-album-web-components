const template = document.createElement("template")

template.innerHTML = `
<div id="layout">
    <app-header></app-header>
    <div id="wrapper-content">
        <div id="content"></div>
        <app-footer></app-footer>
    </div>
    <app-nav current-path=""></app-nav>
</div>
`

export default template
