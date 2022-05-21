const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <h1> movielan <h1>
`

class movielan extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

window.customElements.define('r-movielan', movielan)
export {movielan}