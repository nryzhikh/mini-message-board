

document.addEventListener('DOMContentLoaded', function() {
    const p = document.querySelectorAll(".random-color")
    
    p.forEach(function(p) {
        p.style.color = randomColor()
    })
})


function randomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)]
        }
    return color
}
