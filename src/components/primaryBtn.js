const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
        @import url(../../public/CSS/index.css);
        a {
            background-color: var(--primary-color);
            padding: 0.5rem 1.2rem;
            text-decoration: none;
            border-radius: 24px;
            transition: all ease-in-out 0.1s;
        }

        a:hover{
            background-color: var(--primary-hover-color);
        }
    </style>

    <a class="primary-btn" href=""></a>
`

class primarybtn extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const $ = (element)=> {
            return this.shadowRoot.querySelector(element)
        }
        
        const $all = (element)=> {
            return this.shadowRoot.querySelectorAll(element)
        }

        $("a").innerText = this.getAttribute('text');
        
    }
}

window.customElements.define('r-primarybtn', primarybtn)
export {primarybtn}