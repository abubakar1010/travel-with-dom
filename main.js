const selectCard = document.querySelectorAll(".add-btn")

let count = 0;
let totalPrice = 0;

selectCard.forEach( card => {

    const selectEachCard = card

    selectEachCard.addEventListener('click', function(event){

        count++

        setInnerText("cart-count",count)

        const placeName = event.target.parentNode.childNodes[1].innerText.toUpperCase()
        const Price = event.target.parentNode.childNodes[3].childNodes[1].innerText

    budgetLimit(Price)



        const ChildContainer = document.createElement('li')
        const placeContainer= document.createElement('p')
        const priceContainer = document.createElement('p')

        placeContainer.innerText = placeName
        priceContainer.innerText = Price

        const parent = document.getElementById("selected-place-container")

        ChildContainer.appendChild(placeContainer)
        ChildContainer.appendChild(priceContainer)

        parent.appendChild(ChildContainer)

        let priceInNumber = parseFloat(Price)

        totalPrice += priceInNumber

        setInnerText("total-cost",totalPrice)
        setInnerText("grand-total",totalPrice)
    })
})

function setInnerText(elementId, value){

    document.getElementById(elementId).innerText = value
}



function grandTotal(vehicle){

    if( vehicle === "bus"){

        setInnerText("grand-total",totalPrice + 100 )

    }else if(vehicle === "train"){

        setInnerText("grand-total",totalPrice - 200 )

    }else if( vehicle = 'flight'){

        setInnerText("grand-total",totalPrice + 500 )

    }else{
        setInnerText("grand-total",totalPrice)

    }





}

// is you have budget 

function budgetLimit(shopping){

    const totalBudget = parseFloat(document.getElementById("budget").innerText)

    console.log(totalPrice);

    setInnerText("budget",totalBudget - shopping)


}

