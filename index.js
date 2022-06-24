const title = document.querySelector('h2')
const btn = document.querySelector('button')
const point = document.querySelectorAll('.point')

const wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

let x = []
let o = []

let counter = 0
point.forEach(p => p.addEventListener('click', setPoint))

btn.addEventListener('click', function () {
    x = []
    o = []
    counter = 0
    point.forEach(p => p.textContent = '')
    title.textContent = ''
    btn.setAttribute('hidden', 'true')
    point.forEach(p => p.addEventListener('click', setPoint))
})

function setPoint(e) {
    if (this.innerText.length) {
        return
    }

    counter++
    counter % 2 === 0 ? x.push(Number(this.getAttribute('data-count'))) : o.push(Number(this.getAttribute('data-count')))
    this.textContent = `${counter % 2 === 0 ? 'x' : 'o'}`

    if (counter % 2 === 0) {
        wins.forEach(function (value, i) {
            let intersection = value.filter(val => x.includes(val));
            if (intersection.length === 3) {
                title.textContent = 'X won!'
                point.forEach(p => p.removeEventListener('click', setPoint))
                btn.removeAttribute('hidden')
            } else if (counter === 9 && intersection < 3) {
                title.textContent = 'Draw!'
            }
        })
    } else {
        wins.forEach(function (value, i) {
            let intersection = value.filter(val => o.includes(val));
            if (intersection.length === 3) {
                title.textContent = 'O won!'
                point.forEach(p => p.removeEventListener('click', setPoint))
                btn.removeAttribute('hidden')
            } else if (counter === 9 && intersection < 3) {
                title.textContent = 'Draw!'
            }
        })
    }
}