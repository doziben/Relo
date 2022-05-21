const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <h1> footer <h1>
`

class footer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('r-footer', footer)
export {footer}