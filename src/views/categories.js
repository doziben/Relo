//Import components required
import { header } from "../components/header.js";
import { sidebar } from "../components/sideBar.js";
import { category } from "../components/category.js";

//Import controller 
import { CTRLcategories } from "../app.js";

const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
    @import url(../../public/CSS/index.css);

    .categories{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1rem;
        margin-bottom: 3rem;
    }
    </style>
    
    <div class = "categories">
        
    </div>
    <r-footer></r-footer>
`

class categories extends HTMLElement {

    async render (){
        const arr = await CTRLcategories()
        arr.forEach((element)=>{
            const name = element.name;
            if(name.length < 8){
                const category = document.createElement('r-category');
            category.setAttribute('name', name);
            this.shadowRoot.querySelector('.categories').appendChild(category)
            }
        })
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


window.customElements.define('r-categories', categories)
export {categories}