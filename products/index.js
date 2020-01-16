let menu = document.getElementById('menu')
let about_us = document.getElementById('about-us')
let owlSage = document.getElementsByClassName('owl')
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

// let x = 1
menu.addEventListener('click',openHamburger)
// setInterval(() => {
//     owlSage[0].style.transform = `translateX(${x}px)`
//     console.log(owlSage[0].style.transform)
//     x+10
// }, 1000);

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            900:{
                // center:true,
                margin:10,
    loop:true,
    autoWidth:true,
    items:4

            },
            1000:{
                center:true,
                items:5,
                nav:true,
                loop:false,
                margin:30,
            },
            1800:{
                center:true,
                items: 5,
                nav:true,
                loop:false,
                margin:50
            }
    }})
})
jQuery(document).ready(function($) {
    $('.loop').owlCarousel({
      center: true,
      items: 2,
      loop: true,
      margin:10,
      responsive: {
        600: {
          items: 4,
          margin:10,
        }
      }
    });
    $('.nonloop').owlCarousel({
      center: true,
      items: 2,
      loop: false,
      margin:10,
      responsive: {
        600: {
          items: 4,
          margin:20

        }
      }
    });
  });