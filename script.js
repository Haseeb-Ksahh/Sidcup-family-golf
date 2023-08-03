const cursor = document.querySelector(".cursor")
const blurCursor = document.querySelector(".blurCursor")

document.addEventListener("mousemove", dits => {
    cursor.style.left = dits.x + "px"
    cursor.style.top = dits.y + "px"
    blurCursor.style.left = dits.x - 250 + "px"
    blurCursor.style.top = dits.y - 250 + "px"
})

const allh4 = document.querySelectorAll(".cursorhover")

allh4.forEach(element => {
    element.addEventListener("mouseenter", function () {
        cursor.style.scale = 3
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    element.addEventListener("mouseleave", function () {
        cursor.style.scale = 1
        cursor.style.border = "0px solid #fff"
        cursor.style.backgroundColor = "#95C11E"
    })
})

gsap.to(".nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: ".nav",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "main",
        markers: true,
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
        markers : true,
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
        markers : true,
        start : "top 70%",
        end : "top 45%",
        scrub : 3
    }
})