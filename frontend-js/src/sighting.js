class Sighting{
    constructor(sighting) {
        this.id = sighting.id
        this.date = sighting.date
        this.bird_id = sighting.bird_id
        // console.log(sighting)
    }

    renderBirdSightings() {
        const ul = document.querySelector(`div[data-id="${this.bird_id}"`)
        const li = document.createElement("li")
        const button = document.createElement("button")

        // li.setAttribute("id", this.id)
        li.innerHTML = `Sightings: ${this.date}`
        button.setAttribute("class", "remove")
        button.setAttribute("data-sighting-id", this.id) 
        button.innerHTML = "Remove"

        li.appendChild(button)
        ul.appendChild(li)
    }

    static newSightingForm(bird, birdSightings) {
        console.log("birdSightings", birdSightings)
        console.log("bird", bird)
        const container = document.querySelector(".container")
        let div = document.querySelector(".card")
        const ul = document.getElementById(`${bird.id}`)
        let button = document.querySelector("data-bird-id")
        // how do I make sightingsList dynamic?
        // class.sightingList#
        // const ul = document.querySelector(".sightingsList")

        let birdId = bird.id
        let form = document.createElement("form")
        form.setAttribute("class", "sightingForm")
        

        let inputDate = document.createElement("input")
        let hiddenTag = document.createElement("input")
        let submit = document.createElement("input")
        hiddenTag.type = "hidden"
        hiddenTag.value = `${birdId}`
        inputDate.type = "date"
        submit.type = "submit"

        form.appendChild(inputDate)
        form.appendChild(hiddenTag)
        form.appendChild(submit)
        ul.appendChild(form)

        
    }
}