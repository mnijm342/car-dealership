const carTemplate = document.querySelector("[car-template]")
const carCardContainer = document.querySelector("[car-cards-container]")
const searchInput = document.querySelector("[data-search]")


let cars = []
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    car.forEach(car => {
        const isVisible = car.brand.toLowerCase().includes(value) || car.model.toLowerCase().includes(value)
        car.element.classList.toggle("hide", !isVisible)
    });
})
fetch('./api.json')
    .then(response => response.json())
    .then(data => {
      car = data.map(car => {
        const card = carTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        const image = card.querySelector("[data-image]")
        header.textContent = car.year + " " + car.brand + " " + car.model
        body.textContent = car.condition + " - " + car.price
        image.src = car.imageurl
        carCardContainer.append(card)
        return { brand: car.brand, year: car.year, price: car.price, image: car.imageurl, condition: car.condition, model: car.model, element: card }
    })
})



