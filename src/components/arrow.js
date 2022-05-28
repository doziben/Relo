const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
        .right{
            position: absolute;
            transform: rotate(180deg);
            margin-left: 4px;
        }
        .left{
            position: absolute;
            margin-right: 4px;
        }
        .arrow{

        }
    </style>

    <div class = "arrow">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b_21_1606)">
        <rect width="48" height="48" rx="12" fill="white" fill-opacity="0.24"/>
        <path d="M26.9998 31.92L20.4798 25.4C19.7098 24.63 19.7098 23.37 20.4798 22.6L26.9998 16.08" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <filter id="filter0_b_21_1606" x="-4" y="-4" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feGaussianBlur in="BackgroundImage" stdDeviation="2"/>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_21_1606"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_21_1606" result="shape"/>
        </filter>
        </defs>
        </svg>
    </div>
`

class arrow extends HTMLElement {
    render(){
        const direction = this.getAttribute('direction');
        if(direction=="right"){
            this.shadowRoot.querySelector('svg').classList.add('right')
        }

        else if(direction=="left"){
            this.shadowRoot.querySelector('svg').classList.add('left')
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

window.customElements.define('r-arrow', arrow)
export {arrow}