
let tl = gsap.timeline()

tl.from(".loader>img", {
    scale: 0,
    duration: 0.8,
    opacity: 0
})

tl.to(".loader>img", {
    scale: 6,
    duration: 0.8,
    opacity: 0.2,
    filter: "blur(5px)"
})


tl.to(".loader", {
    // transform: "translateY(-100vh)"
    opacity: 0

})







gsap.to(" .page7 .page7-card   ", {
    transform: "translateX(-200%)",
    scrollTrigger: {
        trigger: ".page7",
        scroller: ".main",
        // markers: true,
        start: "top 4%",
        end: "top -300%",
        scrub: 1,
        pin: true
    }

})