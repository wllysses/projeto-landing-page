function eventoBurger(burger) {
    
    if(burger === classic) {
        burger.addEventListener('mouseenter', () => {
            document.querySelector('#ingredientes-classic').style.opacity = '1'
        })
        burger.addEventListener('mouseout', () => {
            document.querySelector('#ingredientes-classic').style.opacity = '0'
        })
    } else if(burger === especial) {
        burger.addEventListener('mouseenter', () => {
            document.querySelector('#ingredientes-especial').style.opacity = '1'
        })
        burger.addEventListener('mouseout', () => {
            document.querySelector('#ingredientes-especial').style.opacity = '0'
        })
    } else if(burger === prime) {
        burger.addEventListener('mouseenter', () => {
            document.querySelector('#ingredientes-prime').style.opacity = '1'
        })
        burger.addEventListener('mouseout', () => {
            document.querySelector('#ingredientes-prime').style.opacity = '0'
        })
    } else {
        burger.addEventListener('mouseenter', () => {
            document.querySelector('#ingredientes-double').style.opacity = '1'
        })
        burger.addEventListener('mouseout', () => {
            document.querySelector('#ingredientes-double').style.opacity = '0'
        })
    }
}

eventoBurger(classic)
eventoBurger(especial)
eventoBurger(prime)
eventoBurger(double)