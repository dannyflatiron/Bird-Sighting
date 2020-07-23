const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", function() {
    Bird.getAllBirds()
})

class Bird {
    constructor(bird) {
        this.id = bird.id;
        this.name = bird.name; 
        this.species = bird.species;
        this.sightings = bird.sightings;
    }

    static getAllBirds() {
        fetch("http://localhost:3000/birds")
        .then(response => response.json()) 
        .then(data => {
            data.forEach(bird => {
                let newBird = new Bird(bird)
                newBird.addBirdToDom() 
            })
        })
        let d = document.querySelector("h2")
        
        const buttonFilter = document.createElement("button")

        buttonFilter.setAttribute("id", "filter-button")

        buttonFilter.innerText = "Filter"


        d.appendChild(buttonFilter)

        buttonFilter.addEventListener("click", () =>  {
            Bird.getFilteredBirds(event)
        })
    }

    static getFilteredBirds() {
        main.innerHTML = ''
        fetch("http://localhost:3000/birds")
        .then(response => response.json()) 
        .then(data => {
            data.filter(bird => bird.name === "Black-Capped Chickadee").forEach(bird => {

                let newBird = new Bird(bird)
                newBird.addBirdToDom() 
            })       
        })

    }

    addBirdToDom() {

        let dates = this.sightings.map(sighting => sighting.date)
        const div = document.createElement("div")
        const pName = document.createElement("p")
        const button = document.createElement("button")
        const pSpecies = document.createElement("p")
        const ul = document.createElement("ul")        

        div.setAttribute("class", "card")
        div.setAttribute("data-id", this.id)
        ul.setAttribute("class", "sightingsList")
        ul.setAttribute("id", this.id)
        button.setAttribute("data-bird-id", this.id)

        pName.innerText = `Name: ${this.name}`
        pSpecies.innerText = `Species: ${this.species}`
        button.innerText = "Add Sighting"

        div.appendChild(pName)
        div.appendChild(pSpecies)
        div.appendChild(button)
        div.appendChild(ul)
        main.appendChild(div)

        if (this.sightings) {
            this.sightings.forEach(function(sighting) {
                let newSighting = new Sighting(sighting)
                newSighting.renderBirdSightings()
            })
        }  
        
        button.addEventListener("click", () => {
            Sighting.newSightingForm(this, this.sightings)
        })

    }


}