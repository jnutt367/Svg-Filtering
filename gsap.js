gsap.registerPlugin(ScrollTrigger)



let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#ranger",
        start: "top 50%",
        end: "bottom top",
        toggleActions: "restart none none reset"
    }
})

.fromTo("#ranger", { x: 10 }, { opacity: 1, x: 100 })
    .fromTo("#outlaw", { x: -550, y: -600 }, { x: -80, y: -700, duration: 3, display: "none" }, 0)
    .to("#adjusted-sheriff", { duration: 1, x: 100, y: -366 })