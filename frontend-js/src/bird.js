const main = document.querySelector("main")
const searchBar = document.getElementById('searchBar')
let birdsArray = []

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

                birdsArray.push(newBird)
            })
        })

        searchBar.addEventListener('keyup', (e) => {
            const searchString = e.target.value.toLowerCase()
            console.log("birdsArray", birdsArray)
            console.log("event", event)

            const filteredBirds = birdsArray.filter((bird) => {
                return (
                    bird.name.toLowerCase().includes(searchString) || bird.species.toLowerCase().includes(searchString)
                )
            })
            console.log("filteredBirds", filteredBirds)
            // filteredBirds.forEach(bird => bird.addBirdToDom())
            while (filteredBirds.length > 0) {
                filteredBirds[0].addBirdToDom()
            }
        })
    }

    // static searchBirds() {

    //     fetch("http://localhost:3000/birds")
    //     .then(response => response.json()) 
    //     .then(data => {
    //         data.forEach(bird => {
    //             let newBird = new Bird(bird)
    //             birdsArray.push(newBird)
    //         });
    //     })
    
    //     searchBar.addEventListener('keyup', (e) => {
    //         const searchString = e.target.value.toLowerCase()
    //         console.log("birdsArray", birdsArray)
    
    //         const filteredBirds = birdsArray.filter((bird) => {
    //             return (
    //                 bird.name.toLowerCase().includes(searchString) || bird.species.toLowerCase().includes(searchString)
    //             )
    //         })
    //         console.log("filteredBirds", filteredBirds)
    //         addBirdToDom(filteredBirds)
    //     })
    // }

    addBirdToDom() {
        let dates = this.sightings.map(sighting => sighting.date)
        const div = document.createElement("div")
        const pName = document.createElement("p")
        const pSpecies = document.createElement("p")
        const button = document.createElement("button")
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