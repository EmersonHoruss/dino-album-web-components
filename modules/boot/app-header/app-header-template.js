const template = document.createElement("template")

template.innerHTML = `
<div id="header">
    <button id="toggle-nav">Close</button>
    
    <div id="enterprise">
        <img id="logo" src="assets/img/logo.png">
        <span>Dinos' Projects</span>
    </div>
    
    <div id="title-page">
        <h1>Test title</h1>
    </div>

    <button id="user-options">Options</button>
</div>


`

export default template
