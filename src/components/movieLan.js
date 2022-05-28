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
    }
    </style>

    <div class ="movieLan">
        <r-save></r-save>
        <p>Morbius</p>
        <img src="https://image.tmdb.org/t/p/w500/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg" alt="">
    </div>
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