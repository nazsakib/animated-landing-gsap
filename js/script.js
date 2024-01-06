TweenMax.from(".logo", 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".navbar .menu ul li", 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.08)

TweenMax.from(".search", 1, {
    opacity: 0,
    delay: .5,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from(".heading", 1, {
    opacity: 0,
    delay: 1,
    y: 200,
    ease: Expo.easeInOut
})

TweenMax.from(".btn", 1, {
    opacity: 0,
    delay: 1.4,
    y: 200,
    ease: Expo.easeInOut
})

TweenMax.from(".line-one", 1, {
    opacity: 0,
    delay: 2,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".line-two", 1, {
    opacity: 0,
    delay: 2.5,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".img", 1, {
    opacity: 0,
    delay: 2.9,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".year", 1, {
    opacity: 0,
    delay: 3.0,
    y: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".social ul li a", 1, {
    opacity: 0,
    delay: 3.2,
    y: 800,
    ease: Expo.easeInOut
}, 0.2)