class MyCard extends HTMLElement {
    constructor(){
        super()

        const name = this.getAttribute("name")
        const git = this.getAttribute("git")
        const live = this.getAttribute("live")
        const img = this.getAttribute("img")

        this.attachShadow({mode:"open"})
        this.styleCode = `
        <style>
        sl-card::part(body) {
            background-color: #f7a350;
        }
         
        sl-card::part(header) {
            background-color: #f7a350;
        }

        @media screen and (min-width: 426px) {
        sl-card::part(base) {
            max-width: 300px;
            height: 400px;
            margin-bottom: 20px;
        }

        img {
            height: 300px;
            object-fit: cover;
        }
    }
        </style>`

        this.shadowRoot.innerHTML = `${this.styleCode}
        <sl-card class="cards">
        <h1 slot="header">${name}</h1>
        <img class="img" src=${img} alt=${name} slot="image">
        <a href=${git}><sl-button>Git</sl-button></a>
        <a href=${live}><sl-button>Live</sl-button></a>
        </sl-button-group>
        </sl-card>`

        console.log(name, git, live, img)
    }
}

customElements.define("my-card", MyCard)