gsap.to(".nav" , {
    backgroundColor : "#000",
    duration : 0.5,
    height : "110px",
    scrollTrigger : {
        scroll : "body",
        trigger : ".nav",
        markers : true,
        start : "top -10%",
        end : "top -11%",
        scrub : 1
    }
})