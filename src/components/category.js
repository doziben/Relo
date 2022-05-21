const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <h1> category <h1>
`

class category extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('r-category', category)
export {category}