let menu = document.getElementById('menu')
let about_us = document.getElementById('about-us')
// let about_us_item = document.getElementById('aboutUsItem')
let changer = true

const openHamburger = () => {
    if (changer) {
        about_us.className = 'about-us-mini'
        // about_us__item.className = 'aboutUsItem-mini'
    } else {
        about_us.className = 'about-us'
        // about_us_item.className = 'aboutUsItem'
    }
        
    changer = !changer
}
menu.addEventListener('click',openHamburger)

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true,
                loop:false,
                margin:30,

            },
            1000:{
                items:5,
                nav:true,
                loop:false,
                margin:30,
            }
    }})
})
