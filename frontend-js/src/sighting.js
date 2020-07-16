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

        li.setAttribute("id", this.id)
        li.innerHTML = `Sightings: ${this.date}`
        button.setAttribute("class", "remove")
        button.setAttribute("data-sighting-id", this.id) 
        button.innerHTML = "Remove"

        li.appendChild(button)
        ul.appendChild(li)
    }

    static newSightingForm(bird) {
        // console.log("sighting", bird_id)
        let div = document.querySelector(".card")
        let button = document.querySelector("data-bird-id")
        const ul = document.querySelector(".sightingsList")


        let form = document.createElement("form")
        form.setAttribute("method", "post")
        form.setAttribute("class", "sightingForm")

        let inputDate = document.createElement("type", "date")


        // let form = `<form id ="new-sighting-form>
        // <label>What's your problem?:</label>
        // <br><br><br><br><br>
        // <label>What's your problem?:</label>
        // <input type="date" value="2017-06-01">
        // <input type="submit"/>
        // </form>`

        form.appendChild(inputDate)
        ul.appendChild(form)
        div.appendChild(ul)
    }
}