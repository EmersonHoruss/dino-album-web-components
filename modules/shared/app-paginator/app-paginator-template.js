const template = document.createElement("template")

template.innerHTML = `
<div id="paginator">
    <div id="page-size">
        <label for="items-per-page">Ítems por página</label>
        <select name="items-per-page" id="items-per-page">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="100">100</option>
        </select>
    </div>

    <p id="range">
        Página
        <span id="current-page"></span>
        de
        <span id="total-pages"></span>
    </p>

    <p id="range2"></p>
    
    <div id="navigation">
        <button id="start">Start</button>
        <button id="before">Before</button>
        <button id="next">Next</button>
        <button id="end">End</button>
    </div>
</div>
`

export default template
