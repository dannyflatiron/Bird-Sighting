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
        // console.log("this", this)
        // li.setAttribute("id", this.id)
        li.innerHTML = `Sightings: ${this.date}`
        button.setAttribute("class", "remove")
        button.setAttribute("data-sighting-id", this.id) 
        button.innerHTML = "Remove"
        button.addEventListener("click", (event) => {
            event.preventDefault()
            this.deleteSighting(event)
        })

        li.appendChild(button)
        ul.appendChild(li)
    }

    static newSightingForm(bird, birdSightings) {
        // console.log("birdSightings", birdSightings)
        // console.log("bird", bird)
        const container = document.querySelector(".container")
        let div = document.querySelector(".card")
        const ul = document.getElementById(`${bird.id}`)

        let birdId = bird.id
        let form = document.createElement("form")
        form.setAttribute("class", "sightingForm")
        form.setAttribute("form-id", birdId)
        // button.setAttribute("id", birdId)
        

        let inputDate = document.createElement("input")
        inputDate.setAttribute("input-date-id", birdId)
        let hiddenTag = document.createElement("input")
        let submit = document.createElement("input")
        hiddenTag.type = "hidden"
        hiddenTag.value = `${birdId}`
        inputDate.type = "date"
        submit.type = "submit"
        submit.setAttribute("data-submit-id", birdId)

        inputDate.appendChild(hiddenTag)
        form.appendChild(inputDate)
        // form.appendChild(hiddenTag)
        form.appendChild(submit)
        ul.appendChild(form)

        submit.addEventListener("click", (event) => {
            event.preventDefault()
            // console.log("inputDate", inputDate)
            // console.log("inputDate.value", inputDate.value)
            // console.log("event.target", event.currentTarget.form[0].value)
            Sighting.createSighting(event, birdId)
            // console.log("birdid", birdId)
            let date = inputDate.value
        })

        // Sighting.createSighting(form, birdId)

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
        // console.log("this", this.id)
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