//Import components required
import { header } from "../components/header.js";
import { sidebar } from "../components/sideBar.js";

//Import CTRL to handle data 

const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
    @import url(../../public/CSS/index.css);

    p {
        color: var(--text-beta-color);
    }

    .empty{
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    </style>
    
    <h1> Watchlist </h1>

    <div class = "main">
    </div>
    <div class ="watchlist">
    </div>
`

class watchlist extends HTMLElement {
    emptyState(){
        const div = this.shadowRoot.querySelector('.watchlist');
        div.innerHTML = /*HTML*/`
            <div class ="empty">
                <svg width="163" height="163" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="81.5" cy="81.5" r="81.5" fill="#161D2F"/>
                <path d="M84.6605 55.5415L81.2654 42.827C80.9825 41.7675 79.9277 41.1573 78.8682 41.4402L61.9912 45.9467C60.9316 46.2296 60.3214 47.2844 60.6043 48.3439L63.9994 61.0585C64.2823 62.118 65.3371 62.7282 66.3966 62.4453L83.2737 57.9388C84.3332 57.6559 84.9434 56.6011 84.6605 55.5415Z" fill="white"/>
                <path d="M52.4755 48.5686C42.9499 51.7607 37.6615 58.524 37.4248 67.5057C37.3799 68.8555 38.6215 69.8618 39.9081 69.5182L56.9365 64.9713C57.996 64.6884 58.6062 63.6336 58.3233 62.574L54.9484 49.9352C54.6655 48.8756 53.5148 48.21 52.4755 48.5686Z" fill="white"/>
                <path d="M88.4142 38.9316C98.2631 36.9504 106.219 40.1771 110.902 47.8453C111.614 48.993 111.039 50.4843 109.752 50.8278L92.7238 55.3748C91.6643 55.6577 90.6095 55.0475 90.3265 53.9879L86.9517 41.3491C86.6688 40.2896 87.3345 39.1389 88.4142 38.9316Z" fill="white"/>
                <path d="M122.113 85.4311C122.103 85.3932 122.055 85.3655 122.007 85.3377C121.795 85.1511 121.546 84.9746 121.306 84.8359C121.258 84.8082 121.2 84.7426 121.152 84.7149C117.177 82.1276 112.109 81.2109 107.151 82.5346C102.383 83.8078 98.5572 86.9375 96.303 90.9447C94.132 94.808 93.4373 99.4933 94.67 104.11C95.5187 107.289 97.2353 110.073 99.4738 112.232C100.68 113.41 102.083 114.414 103.577 115.15C103.663 115.168 103.711 115.195 103.759 115.223C103.999 115.362 104.228 115.463 104.506 115.591C104.506 115.591 104.506 115.591 104.544 115.581C104.591 115.609 104.639 115.636 104.677 115.626C108.152 117.253 112.196 117.673 116.245 116.591C122.451 114.934 126.973 110.159 128.611 104.452C129.088 102.744 129.334 100.935 129.296 99.1207C129.293 97.7432 129.091 96.3783 128.727 95.0161C127.656 91.0049 125.265 87.6704 122.113 85.4311ZM118.793 100.628L115.274 101.568L116.254 105.238C116.668 106.79 115.725 108.42 114.174 108.834C112.622 109.248 110.992 108.305 110.578 106.754L109.598 103.083L106.079 104.023C104.527 104.437 102.897 103.494 102.483 101.943C102.069 100.391 103.012 98.761 104.563 98.3468L108.082 97.4071L107.183 94.0392C106.769 92.4878 107.712 90.8576 109.263 90.4433C110.815 90.0291 112.445 90.9721 112.859 92.5236L113.758 95.8914L117.278 94.9517C118.829 94.5375 120.459 95.4805 120.873 97.032C121.288 98.5834 120.383 100.203 118.793 100.628Z" fill="white"/>
                <path d="M114.697 57.6559L119.123 74.2302C119.497 75.6303 118.263 76.9325 116.843 76.6227C113.22 75.8064 109.344 75.8683 105.636 76.8585C99.5437 78.4853 94.2696 82.5691 91.1934 88.0525C88.1626 93.4022 87.3977 99.6467 88.9941 105.626C89.8126 108.691 92.0743 112.303 94.467 115.191C95.4261 116.354 94.9524 118.223 93.4767 118.617L74.7833 123.609C62.6364 126.852 50.1706 119.641 46.9271 107.494L39.0155 77.8645C38.7325 76.8049 39.3428 75.7501 40.4023 75.4672L112.3 56.269C113.359 55.9861 114.414 56.5963 114.697 57.6559Z" fill="white"/>
                </svg>

                <h3>Nothing here yet</h3>
                <p>You haven’t added any movies <br> to your watchlist yet</p>
            </div>
        `
    }

    loader(){
        const elem = this.shadowRoot.querySelector('.main')
        this.shadowRoot.removeChild(elem)
    }

    render(){
        const main = this.shadowRoot.querySelector('.main')
        main.innerHTML = '<r-loader></r-loader>'

            
        window.addEventListener('load',()=>{
            setTimeout(()=>{this.loader()}, 3000)
            })

        if(document.readyState === 'complete'){
            setTimeout(()=>{this.loader()}, 1000)
        }

        const div = this.shadowRoot.querySelector('.watchlist');
        // Render watchlist
        if(div.innerText == ""){
            return this.emptyState()
        }
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

window.customElements.define('r-watchlist', watchlist)
export {watchlist}