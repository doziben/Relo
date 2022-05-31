import { router } from "../router.js";

const template = document.createElement('template');
template.innerHTML = /*HTML*/ `
    <style>
        @import url(../../public/CSS/index.css);

        .sidebar {
            background-color: var(--dark-beta-color);
            border-radius: 12px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            position: fixed;
            width: 88%;
            top: 90%;
            margin: 0;
            z-index: 9;
        }

        svg {
                padding: 1rem;
                fill: var(--text-main-color);
                transition: all ease-in-out 0.2s;
                pointer-events: none;
        }

        svg:hover, .active{
            fill: var(--primary-color);
        }

        a:hover {
            background-color: var(--dark-main-color);
        }

        @media only screen and (min-width: 1024px){
            .sidebar{
                flex-direction: column;
                width: auto;
                top: 15%;
                margin-right: 0;
                margin-left: 0;
            }
        }
    </style>

    <div class="sidebar container">
    <a href="home" ><svg class="active" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.7734 10.68L19.04 3.69335C17.3334 2.33335 14.6667 2.32001 12.9734 3.68001L4.24003 10.68C2.9867 11.68 2.2267 13.68 2.49337 15.2533L4.17337 25.3067C4.56003 27.56 6.65336 29.3333 8.93337 29.3333H23.0667C25.32 29.3333 27.4534 27.52 27.84 25.2933L29.52 15.24C29.76 13.68 29 11.68 27.7734 10.68ZM17 24C17 24.5467 16.5467 25 16 25C15.4534 25 15 24.5467 15 24V20C15 19.4533 15.4534 19 16 19C16.5467 19 17 19.4533 17 20V24Z" fill=""/>
    </svg></a>
    
    <a href="categories"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.48008 10.3733H2.66675V15H8.48008V10.3733Z" fill=""/>
    <path d="M8.48003 8.38666V2.84C5.44003 3.4 3.45337 5.36 2.8667 8.37333H8.44003C8.45337 8.37333 8.4667 8.38666 8.48003 8.38666Z" fill=""/>
    <path d="M8.48008 21.7467V17H2.66675V21.7067H8.32008C8.37341 21.7067 8.42675 21.7333 8.48008 21.7467Z" fill=""/>
    <path d="M29.1332 8.37334C28.5599 5.45334 26.6932 3.53334 23.8132 2.90668V8.37334H29.1332Z" fill=""/>
    <path d="M21.8133 15V2.67999C21.7466 2.66666 21.6666 2.66666 21.5866 2.66666H10.48V15H21.8133Z" fill=""/>
    <path d="M29.3332 17H23.8132V21.7067H29.3332V17Z" fill=""/>
    <path d="M23.8132 29.0933C26.6666 28.4667 28.5332 26.5733 29.1199 23.7067H23.8132V29.0933Z" fill=""/>
    <path d="M8.31988 23.7067H2.87988C3.49322 26.6667 5.46655 28.6 8.47988 29.16V23.68C8.42655 23.6933 8.37322 23.7067 8.31988 23.7067Z" fill=""/>
    <path d="M29.3332 10.3733H23.8132V15H29.3332V10.3733Z" fill=""/>
    <path d="M10.48 17V29.3333H21.5866C21.6666 29.3333 21.7466 29.3333 21.8133 29.32V17H10.48V17Z" fill=""/>
    </svg></a>

    <a href="watchlist"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.6401 7.81335V3.33335C19.6401 2.96002 19.3468 2.66669 18.9734 2.66669H13.0268C12.6534 2.66669 12.3601 2.96002 12.3601 3.33335V7.81335C12.3601 8.18669 12.6534 8.48002 13.0268 8.48002H18.9734C19.3468 8.48002 19.6401 8.18669 19.6401 7.81335Z" fill=""/>
    <path d="M9.66656 2.69333C6.25322 2.90666 3.91989 4.66666 3.05322 7.59999C2.91989 8.03999 3.23989 8.48 3.69322 8.48H9.69322C10.0666 8.48 10.3599 8.18666 10.3599 7.81333V3.35999C10.3599 2.98666 10.0399 2.66666 9.66656 2.69333Z" fill=""/>
    <path d="M22.3332 2.68002C25.7466 2.89336 28.0799 4.65336 28.9466 7.58669C29.0799 8.02669 28.7599 8.46669 28.3066 8.46669H22.3066C21.9332 8.46669 21.6399 8.17336 21.6399 7.80002V3.34669C21.6399 2.97336 21.9599 2.65336 22.3332 2.68002Z" fill=""/>
    <path d="M29.3334 20.9334C29.3334 20.92 29.3201 20.9067 29.3067 20.8934C29.2534 20.8134 29.1867 20.7334 29.1201 20.6667C29.1067 20.6534 29.0934 20.6267 29.0801 20.6134C28.0001 19.4134 26.4134 18.6667 24.6667 18.6667C22.9867 18.6667 21.4534 19.36 20.3601 20.48C19.3067 21.56 18.6667 23.04 18.6667 24.6667C18.6667 25.7867 18.9867 26.8534 19.5334 27.76C19.8267 28.2534 20.2001 28.7067 20.6267 29.08C20.6534 29.0934 20.6667 29.1067 20.6801 29.12C20.7467 29.1867 20.8134 29.24 20.8934 29.3067C20.8934 29.3067 20.8934 29.3067 20.9067 29.3067C20.9201 29.32 20.9334 29.3334 20.9467 29.3334C21.9467 30.1734 23.2401 30.6667 24.6667 30.6667C26.8534 30.6667 28.7601 29.4934 29.8001 27.76C30.1067 27.24 30.3467 26.6667 30.4934 26.0667C30.6134 25.6134 30.6667 25.1467 30.6667 24.6667C30.6667 23.2534 30.1734 21.9467 29.3334 20.9334ZM26.9067 25.64H25.6667V26.9334C25.6667 27.48 25.2134 27.9334 24.6667 27.9334C24.1201 27.9334 23.6667 27.48 23.6667 26.9334V25.64H22.4267C21.8801 25.64 21.4267 25.1867 21.4267 24.64C21.4267 24.0934 21.8801 23.64 22.4267 23.64H23.6667V22.4534C23.6667 21.9067 24.1201 21.4534 24.6667 21.4534C25.2134 21.4534 25.6667 21.9067 25.6667 22.4534V23.64H26.9067C27.4534 23.64 27.9067 24.0934 27.9067 24.64C27.9067 25.1867 27.4667 25.64 26.9067 25.64Z" fill=""/>
    <path d="M29.3334 11.1466V16.9866C29.3334 17.48 28.8134 17.8 28.3734 17.5733C27.2534 16.9866 25.9734 16.6666 24.6667 16.6666C22.5201 16.6666 20.4267 17.5466 18.9334 19.08C17.4667 20.5733 16.6667 22.56 16.6667 24.6666C16.6667 25.7466 17.0934 27.1333 17.6267 28.2933C17.8401 28.76 17.5201 29.3333 17.0001 29.3333H10.4134C6.13341 29.3333 2.66675 25.8666 2.66675 21.5866V11.1466C2.66675 10.7733 2.96008 10.48 3.33341 10.48H28.6667C29.0401 10.48 29.3334 10.7733 29.3334 11.1466Z" fill=""/>
    </svg></a>

    <a href="explore"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.88 14.2934H19.76V4.69336C19.76 2.45336 18.5467 2.00003 17.0667 3.68003L16 4.89336L6.97335 15.16C5.73335 16.56 6.25335 17.7067 8.12002 17.7067H12.24V27.3067C12.24 29.5467 13.4533 30 14.9333 28.32L16 27.1067L25.0267 16.84C26.2667 15.44 25.7467 14.2934 23.88 14.2934Z" fill=""/>
    </svg></a>

    </div>
`

class sidebar extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback(){
        const tabs = this.shadowRoot.querySelectorAll('a');

        tabs.forEach((tab)=>{
            tab.addEventListener('click', (e)=>{
                e.preventDefault();
                let paths = e.composedPath()[0]
                let ref= paths.pathname.replace('/public/', "")
                router(ref);
                tabs.forEach((item)=>{
                    item.lastChild.classList.remove('active');
                })
                tab.lastChild.classList.add('active');
            })
        })
    }
}

window.customElements.define('r-sidebar', sidebar)
export {sidebar}