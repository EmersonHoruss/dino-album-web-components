const template = document.createElement("template")

template.innerHTML = `
<div id="header">
    <button id="toggle-nav">Close</button>
    
    <div id="enterprise">
        <img class="logo" src="assets/img/logo.png">
        <span>Dinos' Projects</span>
    </div>
    
    <div id="title-page">
        <h1>Test title</h1>
    </div>

    <div id="user-options">
        <img class="logo" src="">
    </div>
</div>
`

export default template
