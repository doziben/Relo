const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
    @import url(../../public/CSS/index.css);

    a.category-text{
        font-family: 'MonumentExtended', sans-serif;
        font-size: 2.4rem;
        text-decoration: none;
        margin-top: 42%;
        margin-left: 5%;
        margin-right: 5%;
    }

    .gradient {
        background: blue;
    }

    .category {
        display: grid;
        width: auto;
        height: 32vh;
        border-radius: 12px;
    }
    </style>

    <div class="category"><a class="category-text" href="" ></a></div>
`

class category extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        const $ = (element)=> {
            return this.shadowRoot.querySelector(element)
        }
        
        const $all = (element)=> {
            return this.shadowRoot.querySelectorAll(element)
        }

        $('a').innerHTML = this.getAttribute('name')
    }

    connectedCallback(){
        //change gradient color randomly
        const $ = (element)=> {
            return this.shadowRoot.querySelector(element)
        }
        
        const gradients = [
            "291.75deg, #1C54E2 -28.15%, #7618ED 97.89%",
            "90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%",
            "90deg, hsla(197, 100%, 63%, 1) 0%, hsla(294, 100%, 55%, 1) 100%",
            "90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%",
            "90deg, hsla(59, 86%, 68%, 1) 0%, hsla(134, 36%, 53%, 1) 100%",
            "90deg, hsla(307, 93%, 84%, 1) 0%, hsla(256, 96%, 44%, 1) 100%",
            "90deg, hsla(350, 73%, 44%, 1) 0%, hsla(274, 65%, 12%, 1) 100%",
            "90deg, hsla(318, 44%, 51%, 1) 0%, hsla(347, 94%, 48%, 1) 100%",
            "62deg, rgba(13,131,50,1) 0%, rgba(43,177,56,1) 35%, rgba(16,107,209,1) 100%",
        ]

        let random = Math.floor(Math.random()*10);
        $('.category').style = `background: linear-gradient(${gradients[random]});`
        
        
    }
}

window.customElements.define('r-category', category)
export {category}