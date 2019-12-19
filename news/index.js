let menu = document.getElementById('menu')
let about_us = document.getElementById('about-us')
let about_us__item = document.getElementById('aboutUsItem')
let changer = true

const openHamburger = () => {
    if (changer) {
        about_us.className = 'about-us-mini'
        about_us__item.className = 'aboutUsItem-mini'
    } else {
        about_us.className = 'about-us'
        about_us__item.className = 'aboutUsItem'
    }
        
    changer = !changer
}
menu.addEventListener('click',openHamburger)