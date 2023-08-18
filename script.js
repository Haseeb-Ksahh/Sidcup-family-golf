const cursor = document.querySelector("[data-cursor-dot]");
const blurCursor = document.querySelector("[data-blur-cursor]");
const crsrhover = document.querySelectorAll(".cursorhover")

window.addEventListener("mousemove", e => {
    
    const positionX = e.clientX - cursor.offsetWidth / 2;
    const positionY = e.clientY - cursor.offsetHeight / 2;

    cursor.style.left = `${positionX}px`;
    cursor.style.top = `${positionY}px`;

    const bcpositionX = e.clientX - blurCursor.offsetWidth / 2;
    const bcpositionY = e.clientY - blurCursor.offsetHeight / 2;

    blurCursor.style.left = `${bcpositionX}px`;
    blurCursor.style.top = `${bcpositionY}px`;

})

crsrhover.forEach(element => {
    element.addEventListener("mouseenter", function () {
        cursor.style.cssText = "transform : scale(3.5); border : 1px solid white; background-color : transparent;"
    })
    element.addEventListener("mouseleave", function () {
        cursor.style.cssText = "transform : scale(1); border : 0px solid white; background-color : #95C11E;"
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