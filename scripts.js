const container = document.getElementById('container')
const btn = document.getElementById('btn')

//
for (let i = 0; i < 256;  i++ ){
    const div = document.createElement("div")
    div.classList.add('divs')
    container.appendChild(div)
}

function btnClicked() {
    let squares = prompt("Enter number of squares per side ")
    while (squares > 100) {
        squares =  prompt("Enter number of squares per side no more than 100")
    }
    container.innerHTML = ''
    const totalsquares = squares * squares

    for (let i = 0; i < totalsquares; i++) {
        const div = document.createElement("div")
        div.classList.add('divs')
        container.appendChild(div)
    }

    const divs = Array.from(document.getElementsByClassName('divs'))

    divs.forEach(div => div.addEventListener('mouseover', function(e) {
            e.target.classList.add('black')
            }))
}

btn.addEventListener('click', btnClicked)

const divs = Array.from(document.getElementsByClassName('divs'))



 
divs.forEach(div => div.addEventListener('mouseover', function(e) {
e.target.classList.add('black')
}))



    