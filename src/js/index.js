const evento1 = document.getElementById('classic-event')

evento1.addEventListener('mouseenter', () => {
    document.getElementById('classic-ingredientes').style.display = 'block'
})

evento1.addEventListener('mouseout', () => {
    document.getElementById('classic-ingredientes').style.display = 'none'
})

const evento2 = document.getElementById('especial-event')

evento2.addEventListener('mouseenter', () => {
    document.getElementById('especial-ingredientes').style.display = 'block'
})

evento2.addEventListener('mouseout', () => {
    document.getElementById('especial-ingredientes').style.display = 'none'
})

const evento3 = document.getElementById('prime-event')

evento3.addEventListener('mouseenter', () => {
    document.getElementById('prime-ingredientes').style.display = 'block'
})

evento3.addEventListener('mouseout', () => {
    document.getElementById('prime-ingredientes').style.display = 'none'
})

const evento4 = document.getElementById('double-event')

evento4.addEventListener('mouseenter', () => {
    document.getElementById('double-ingredientes').style.display = 'block'
})

evento4.addEventListener('mouseout', () => {
    document.getElementById('double-ingredientes').style.display = 'none'
})