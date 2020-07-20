class Sighting{
    constructor(sighting) {
        this.id = sighting.id
        this.date = sighting.date
        this.bird_id = sighting.bird_id
    }

    renderBirdSightings() {
        const ul = document.querySelector(`div[data-id="${this.bird_id}"`)
        const li = document.createElement("li")
        const button = document.createElement("button")

        li.innerHTML = `Sightings: ${this.date}`
        button.innerHTML = "Remove"

        button.setAttribute("class", "remove")
        button.setAttribute("data-sighting-id", this.id) 
        button.addEventListener("click", (event) => {
            event.preventDefault()
            this.deleteSighting(event)
        })

        li.appendChild(button)
        ul.appendChild(li)
    }

    static newSightingForm(bird, birdSightings) {
        let birdId = bird.id
        const container = document.querySelector(".container")
        let div = document.querySelector(".card")
        const ul = document.getElementById(`${bird.id}`)

        let form = document.createElement("form")
        let inputDate = document.createElement("input")
        let hiddenTag = document.createElement("input")
        let submit = document.createElement("input")

        form.setAttribute("class", "sightingForm")
        form.setAttribute("form-id", birdId)
        inputDate.setAttribute("input-date-id", birdId)
        submit.setAttribute("data-submit-id", birdId)

        hiddenTag.type = "hidden"
        hiddenTag.value = `${birdId}`
        inputDate.type = "date"
        submit.type = "submit"

        inputDate.appendChild(hiddenTag)
        form.appendChild(inputDate)
        form.appendChild(submit)
        ul.appendChild(form)

        submit.addEventListener("click", (event) => {
            event.preventDefault()

            Sighting.createSighting(event, birdId)
            let date = inputDate.value
        })
    }

    static createSighting(event, birdId) {
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
                {
                    sighting: {
                        date: event.currentTarget.form[0].value,
                        bird_id: birdId
                    }
                }
            )
        }
        fetch('http://localhost:3000/sightings', configObj)
        .then(res => res.json())
        .then(json => {
            let newSighting = new Sighting(json)
            newSighting.renderBirdSightings()
        })
    }

    deleteSighting(event) {
        console.log("event", event)
        const configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
        fetch(`http://localhost:3000/sightings/${this.id}`, configObj)
        event.currentTarget.parentElement.remove()
    }

}