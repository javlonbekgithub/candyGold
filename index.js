let menu = document.getElementById('menu')
let about_us = document.getElementById('about-us')
let prItems = document.getElementsByClassName('prItems')
let goal = document.getElementsByClassName('goal')
let prItemsOriginal = prItems[0].style
let changer = true
let x,y
degY = 0
degX = 0
maxDegY = 10
maxDegX = 10 

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


const over = (e,i) => {

    if (e.layerX < 112) {
        if(degY < -maxDegY) 
            degY = -maxDegY
        y = degY = degY - 1.46

    } else {
            if(degY > maxDegY)
                degY = maxDegY
        y = degY = degY + 1.46
    }

    if (e.layerY > 47.5) {
        if(degX < -maxDegX) 
            degX = -maxDegX
        x = degX = degX - 1.75

    } else {
            if(degX > maxDegX)
                degX = maxDegX
        x = degX = degX + 1.75
    }

    
    prItems[i].style.transform = `rotateX(${x}deg) rotateY(${y}deg) translateY(-10px)`
}

const leave = (e,i) => {
    prItems[i].style = prItemsOriginal
    degY = 0
    degX = 0 
}
for(let i = 0;i < prItems.length; i++){
    prItems[i].addEventListener('mousemove',(e)=>over(e,i))
    prItems[i].addEventListener('mouseleave',(e)=>leave(e,i))
}


setTimeout(() => {
    
}, 1000);