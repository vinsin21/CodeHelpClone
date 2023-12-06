gsap.to(" .page7 .page7-card   ", {
    transform: "translateX(-200%)",
    scrollTrigger: {
        trigger: ".page7",
        scroller: ".main",
        markers: true,
        start: "top 4%",
        end: "top -300%",
        scrub: 1,
        pin: true
    }

})