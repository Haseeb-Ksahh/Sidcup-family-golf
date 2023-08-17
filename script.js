const cursor = document.querySelector(".cursor")
const blurCursor = document.querySelector(".blurCursor")

document.addEventListener("mousemove", dits => {
    cursor.style.left = dits.x - 12.5 + "px"
    cursor.style.top = dits.y - 12.5 + "px"
    blurCursor.style.left = dits.x - 250 + "px"
    blurCursor.style.top = dits.y - 250 + "px"
})

const crsrhover = document.querySelectorAll(".cursorhover")

crsrhover.forEach(element => {
    element.addEventListener("mouseenter", function () {
        cursor.style.scale = 3.5
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    element.addEventListener("mouseleave", function () {
        cursor.style.scale = 1
        cursor.style.border = "0px solid #fff"
        cursor.style.backgroundColor = "#95C11E"
    })
})

const h3Element = document.querySelectorAll(".footer h3 , .hoverColor")

h3Element.forEach( element => {
    element.addEventListener("mouseenter" , function(){
        element.style.color = "white"
    })
    element.addEventListener("mouseleave" , function(){
        element.style.color = "black"
    })
})

const imgHover = document.querySelectorAll(".imgHover")

imgHover.forEach( element => {
    element.addEventListener("mouseenter" , function(){
        element.style.scale = 0.9
    })
    element.addEventListener("mouseleave" , function(){
        element.style.scale = 1
    })
})

gsap.to(".nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: ".nav",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "main",
        start: "top -25%",
        end: "top -75%",
        scrub: 1
    }
})

gsap.to("#colon1" , {
    x : 55,
    y : 55,
    scrollTrigger : {
        trigger : "#colon1",
        start : "top 70%",
        end : "top 45%",
        scrub : 3
    }
})

gsap.to("#colon2" , {
    x : -55,
    y : -55,
    scrollTrigger : {
        trigger : "#colon1",
        start : "top 70%",
        end : "top 45%",
        scrub : 3
    }
})

gsap.to(".page4 h1" , {
    y : -50,
    scrollTrigger : {
        trigger : ".page4 h1",
        start : "top 75%",
        end : "top 40%",
        scrub : 3
    }
})