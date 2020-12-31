class MyCard extends HTMLElement {
    constructor(){
        super()

        const name = this.getAttribute("name")
        const git = this.getAttribute("git")
        const live = this.getAttribute("live")
        const img = this.getAttribute("img")

        this.innerHTML = `
        <sl-card>
        <h1 slot="header">${name}</h1>
        <img class="img" src=${img} alt=${name} slot="image">
        <sl-button-group slot="footer">
        <a href=${git}><sl-button>Left</sl-button></a>
        <a href=${live}><sl-button>Right</sl-button></a>
        </sl-button-group>

        
        
        
        </sl-card>`

        console.log(name, git, live, img)
    }
}

customElements.define("my-card", MyCard)