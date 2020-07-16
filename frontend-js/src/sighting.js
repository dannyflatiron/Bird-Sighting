class Sighting{
    constructor(sighting) {
        this.id = sighting.id
        this.date = sighting.date
        this.bird_id = sighting.bird_id
        // console.log(sighting)
    }

    renderBirdSightings() {
        console.log("this",this)
        const ul = document.querySelector(`div[data-id="${this.bird_id}"`)
        const li = document.createElement("li")
        const button = document.createElement("button")
        li.innerHTML = `Sightings: ${this.date}`

        button.setAttribute("class", "remove")
        button.setAttribute("data-sighting-id", this.id) 
        button.innerHTML = "Remove"

        li.appendChild(button)
        ul.appendChild(li)
    }
   
}