import {gsap} from 'gsap';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {MotionPathPlugin} from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);



export const heroAnimation = () => {
    const main = document.querySelector('.main')

    const wrapper = document.querySelector('.section-wrapper1');
    const circleContainer = document.querySelector(".circle-container")
    const services = document.querySelectorAll(".services > .service")
    const titleServices = document.querySelector(".services > .title")

    const timeline = gsap.timeline({
        scrollTrigger: {
            scroller: main,
            trigger: wrapper,
            scrub: 1,
            start: 'top top',
            end: 'bottom bottom',
            invalidateOnRefresh: true
        },
    });
    
    timeline.to(circleContainer, {  width: "0vh", height: "0vh",  duration: 1 }, 0);
    timeline.to(titleServices, {   top: "28%",  duration: 1 }, 0.5);

    services.forEach((service, i) => {
    	timeline.to(service, {  scale: 1,  duration: 1 }, 0 + i * 0.25);
    })





}

