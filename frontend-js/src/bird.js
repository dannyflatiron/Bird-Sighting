document.addEventListener("DOMContentLoaded", function() {

})

class Bird {
    constructor(bird) {
        this.id = bird.id;
        this.name = bird.name;
        this.species = bird.species;
        this.sightings = [];
    }

    static createBird() {
        let birdForm = document.querySelector(".new-bird-form")
        classForm.addEventListener("submit", function(event) {
            event.preventDefault()
        })
        fetch("http://localhost:3000/birds", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: e.target[0].value
            })
        })
    }
}

