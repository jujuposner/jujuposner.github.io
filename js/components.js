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
            background-color: orange;
        }
         
        sl-card::part(header) {
            background-color: orange;
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