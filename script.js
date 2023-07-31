const cursor = document.querySelector(".cursor")
const blurCursor = document.querySelector(".blurCursor")

document.addEventListener("mousemove" , dits => {
    cursor.style.left = dits.x - 12.5 + "px"
    cursor.style.top = dits.y - 12.5 + "px"
    blurCursor.style.left = dits.x - 200 + "px"
    blurCursor.style.top = dits.y - 200 + "px"
})

gsap.to(".nav" , {
    backgroundColor : "#000",
    duration : 0.5,
    height : "110px",
    scrollTrigger : {
        trigger : ".nav",
        markers : true,
        start : "top -10%",
        end : "top -11%",
        scrub : 1
    }
})

gsap.to(".main" , {
    backgroundColor : "#000",
    scrollTrigger : {
        trigger : "main",
        markers : true,
        start : "top -25%",
        end : "top -75%",
        scrub : 1
    }
})