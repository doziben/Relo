const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <h1> moviepor <h1>
`

class moviepor extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('r-moviepor', moviepor)
export {moviepor}