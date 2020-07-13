document.addEventListener("DOMContentLoaded", function() {
    // Bird.createBird()
    Bird.getAllBirds()
})

class Bird {
    constructor(bird) {
        this.id = bird.id;
        this.name = bird.name; 
        this.species = bird.species;
        this.sightings = [];
    }

    // static createBird() {
    //         // this caputes input from the user and preserves it in the database
    //         // statis methods are not callable on instances of the class only on the class itself

    //         // querySelector returns first instance 
    //         // classSelector returns an array 
    //         let birdForm = document.querySelector(".new-bird-form")
    //         birdForm.addEventListener("submit", function(event) {
    //             event.preventDefault()
                
    //                 // captures form data
    //     let formData = {
    //         name: event.target[0].value,
    //         species: event.target[1].value 
    //     }

    //     // configObj will tell fetch that this is a POST request and stringify data
    //     let configObj = {
    //         method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Accept": "application/json"
    //             },
    //             // data exchanged between brwoser and server is sent as a text
    //             // data assigned to the body of fetch request must be a string
    //             body: JSON.stringify(formData)
    //     }

    //     fetch("http://localhost:3000/birds", configObj)
    //         .then(response => response.json()) 
    //         .then(data => {
    //             // console.log("data", data.error)
    //             if (data.error) {
    //                 const errorDiv = document.querySelector(".main")
    //                 let pErrorMessage = document.createElement("p")
    //                 pErrorMessage.setAttribute("class", "error-message")
    //                 pErrorMessage.innerText = data.error
    //                 errorDiv.appendChild(pErrorMessage)
    //                 setTimeout(function(){
    //                     document.querySelector(".error-message").innerText = ""
    //                 }, 3000);
    //             } else {
    //                 let newBird = new Bird(data)
    //                 newBird.addBirdToDom()
    //             }
    //         })
    //         // clears input field 
    //         event.target[0].value = ""
    //         event.target[1].value = ""
    //     })
        


    // }

    // method to add a Bird instance from User submitted data to DOM
    // certain HTML element (p tag) is being dynamically generated to hold Bird's name
    // then p tag is being appended to appropriate div container
    addBirdToDom() {
        let main = document.querySelector("main")
        // let pTagName = document.createElement("p")
        // let pTagSpecies = document.createElement("p")
        // pTagName.innerText = this.name
        // pTagSpecies.innerText = this.species
        // bird.appendChild(pTagName)
        // bird.appendChild(pTagSpecies)

        const div = document.createElement("div")
        const pName = document.createElement("p")
        const pSpecies = document.createElement("p")
        const button = document.createElement("button")
        const ul = document.createElement("ul")

        div.setAttribute("class", "card")
        div.setAttribute("data-id", this.id)
        pName.innerText = this.name
        pSpecies.innerText = this.species
        button.setAttribute("data-bird-id", this.id)
        button.innerText = "Add Sighting"

        div.appendChild(pName)
        div.appendChild(pSpecies)
        div.appendChild(button)
        div.appendChild(ul)
        main.appendChild(div)
    }

    static getAllBirds() {
        // get all birds from api
        // add birds to DOM
        fetch("http://localhost:3000/birds")
        .then(response => response.json()) 
        .then(data => {
            console.log("data", data)
            // data is an array have to use map to access each element
            data.forEach(bird => {
                let newBird = new Bird(bird)
                newBird.addBirdToDom() 
            })
        })
    }
}
