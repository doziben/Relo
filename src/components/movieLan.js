const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
    @import url(../../public/CSS/index.css);

    .movieLan{
        position: relative;
        background-color: black;
        width: 8.25rem;
        height: 12.375rem;
        border-radius: 12px;
    }

    img {
        width: inherit;
        height: inherit;
        object-fit: cover;
        border-radius: 12px;
        opacity: 50%;
        transition: all ease-in-out 0.1s;
    }

    img:hover {
        opacity: 30%;
    }

    p {
        position: absolute;
        color: var(--text-main-color);
        bottom: 3%;
        z-index: 5;
        padding-left: 1rem;
        padding-right: 1rem;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    </style>

    <div class ="movieLan">
        <r-save></r-save>
        <p></p>
        <img src="" alt="">
    </div>
`

class movielan extends HTMLElement {
    render(){
        const titleSlot = this.shadowRoot.querySelector('p')
        const imgSlot = this.shadowRoot.querySelector('img')
        const title = this.getAttribute('title')
        const img = this.getAttribute('img')

        titleSlot.innerText = title
        imgSlot.src = img
    }
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
        this.render()
    }
}

window.customElements.define('r-movielan', movielan)
export {movielan}