document.addEventListener("DOMContentLoaded", init)
let birdsArray = []
const searchBar = document.getElementById('searchBar')

function init() {
    searchBirds()
}

function searchBirds() {

    fetch("http://localhost:3000/birds")
    .then(response => response.json()) 
    .then(data => {
        data.forEach(bird => {
            let newBird = new Bird(bird)
            birdsArray.push(newBird)
        });
    })

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase()
        console.log("birdsArray", birdsArray)

        const filteredBirds = birdsArray.filter((bird) => {
            return (
                bird.name.toLowerCase().includes(searchString) || bird.species.toLowerCase().includes(searchString)
            )
        })
        console.log("filteredBirds", filteredBirds)
        addBirdToDom(filteredBirds)
    })
}




