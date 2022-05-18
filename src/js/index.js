let burgers = document.querySelectorAll('.ingredientes')

burgers.forEach(burger => {
    burger.addEventListener('mouseenter', () => {
        burger.classList.add('mostrar')
    })
    burger.addEventListener('mouseout', () => {
        burger.classList.remove('mostrar')
    })
})