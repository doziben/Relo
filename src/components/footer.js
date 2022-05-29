const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
        @import url(../../public/CSS/index.css);

        .footer{
            display: flex;
            margin-bottom: 8rem;
            justify-content: space-between;
        }

        .links{
            display:flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 1rem;
        }

        a{  
            color: var(--text-beta-color);
            transition: all ease-in-out 0.1s;
        }

        a:hover{
            color: var(--text-main-color)
        }
    
    </style>
    <div class = " footer ">
        <img class ="logo" src ="../../public/assets/logo.svg" alt="Relo Logo">
        <div class = "links">
            <a class="link" href="">RECOMMENDED</a>
            <a class="link" href="">FOR YOU</a>
            <a class="link" href="">TV SHOWS</a>
            <a class="link" href="">SEARCH</a>
        </div>
    </div>
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