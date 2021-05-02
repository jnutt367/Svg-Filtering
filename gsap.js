gsap.fromTo("#ranger", { x: 10 }, { opacity: 1, x: 100 })
gsap.fromTo("#outlaw", { x: -550, y: -600 }, { x: -80, y: -700, duration: 3, display: "none" }, 0)
gsap.to("#adjusted-sheriff", { duration: 1, x: 100, y: -366 })