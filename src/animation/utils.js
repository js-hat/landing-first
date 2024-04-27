import {gsap} from "gsap";

export function fade(element) {
    gsap.to(element, {
        scrollTrigger: {
            scroller: ".main",
            trigger: element,
            start: "top bottom",
            end: "top bottom",
            markers: true,
            toggleActions: "play none none none"
        },
        top: 0,
        duration: .6
    });
}