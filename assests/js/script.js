let prev = document.querySelector(".buttons .prev")
let next = document.querySelector(".buttons .next")

next.addEventListener('click' , nextSlide)
prev.addEventListener('click' , prevSlide)

function nextSlide(){
    let item = document.querySelectorAll(".item")
    document.querySelector(".slider").appendChild(item[0])
}

function prevSlide(){
    let item = document.querySelectorAll(".item")
    document.querySelector(".slider").prepend(item[item.length-1])
}

setInterval(()=>{
    next.click()
},3000)

