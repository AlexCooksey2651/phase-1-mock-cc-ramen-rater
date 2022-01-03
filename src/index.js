const ramenURL = 'http://localhost:3000/ramens'
let ramenArray = []
let ramenMenu = document.getElementById('ramen-menu')
let ramenDetails = document.getElementById('ramen-detail')

document.addEventListener("DOMContentLoaded", function() {
    fetchRamenData()
});

function fetchRamenData() {
    fetch(ramenURL)
    .then(response => response.json())
    .then(ramens => {
        for (const ramen of ramens) {
            let ramenImg = document.createElement('img')
            ramenImg.src = ramen.image
            ramenMenu.appendChild(ramenImg)

            ramenImg.addEventListener('click', function() {
                const detailImg = document.querySelector('.detail-image')
                detailImg.src = ramen.image
                detailImg.alt = `${ramen.name} Image`

                const ramenName = document.querySelector('.name')
                ramenName.innerText = ramen.name

                const ramenRest = document.querySelector('.restaurant')
                ramenRest.innerText = ramen.restaurant

                const ramenRating = document.querySelector('#rating-display')
                ramenRating.innerText = ramen.rating

                const ramenComment = document.querySelector('#comment-display')
                ramenComment.innerText = ramen.comment
            })
        }
    })
}

const newRamenForm = document.querySelector('#new-ramen')
newRamenForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const newRamenObj = {}
    newRamenObj.name = document.querySelector('#new-name').value
    newRamenObj.restaurant = document.querySelector('#new-restaurant').value
    newRamenObj.image = document.querySelector('#new-image').value
    newRamenObj.rating = document.querySelector('#new-rating').value
    newRamenObj.comment = document.querySelector('#new-comment').value
    newRamenImg = document.createElement('img')
    newRamenImg.src = newRamenObj.image
    ramenMenu.appendChild(newRamenImg)
})
