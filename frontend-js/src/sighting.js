class Sighting{
    constructor(sighting) {
        this.date = sighting.date
        this.bird = sighting.bird
        console.log(sighting);
    }

    static getAllSightings() {
        // get all birds from api
        // add birds to DOM
        fetch("http://localhost:3000/sightings")
        .then(response => response.json()) 
        .then(data => {
            // data is an array have to use map to access each element
            data.forEach(sighting => {
                let newSighting = new Sighting(sighting)
                // newBird.addBirdToDom() 
            })
        })
    }
   
}