const selectCard = document.querySelectorAll(".add-btn")

let count = 0;

selectCard.forEach( card => {

    const selectEachCard = card

    selectEachCard.addEventListener('click', function(event){

        count++

        setInnerText("cart-count",count)

        const placeName = event.target.parentNode.childNodes[1].innerText.toUpperCase()
        const Price = event.target.parentNode.childNodes[3].childNodes[1].innerText

        const ChildContainer = document.createElement('li')
        const placeContainer= document.createElement('p')
        const priceContainer = document.createElement('p')

        placeContainer.innerText = placeName
        priceContainer.innerText = Price

        const parent = document.getElementById("selected-place-container")

        ChildContainer.appendChild(placeContainer)
        ChildContainer.appendChild(priceContainer)

        parent.appendChild(ChildContainer)

        console.log(placeName, Price);
    })
})

function setInnerText(elementId, value){

    document.getElementById(elementId).innerText = value
}
