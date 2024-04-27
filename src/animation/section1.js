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
    timeline.to(titleServices, {   top: "28%", scale: 1,  duration: 1 }, 0.5);

    services.forEach((service, i) => {
    	timeline.to(service, {  scale: 1,  duration: 1 }, 0 + i * 0.25);
    })


    gsap.to(".section1 .circle-container img", {
        scrollTrigger: ".section1", // start the animation when ".box" enters the viewport (once)
        top: 0,
        scale: 1,
        duration: 1.8,
        delay: 0.8

    });


    document.querySelectorAll(".section7 .content-container .right .list .item").forEach((item, i) => {
        gsap.to(`.section7 .content-container .right .list .item:nth-child(${i+1})`, {
            scrollTrigger: {
                scroller: ".main",
                trigger: `.section7 .content-container .right .list .item:nth-child(${i+1})`,
                start: "top bottom", // Анимация начнется, когда верх триггер-элемента достигнет нижней части вьюпорта
                end: "top bottom", // Анимация закончится, когда нижняя часть триггер-элемента покинет верх вьюпорта
                markers: false, // Показывает маркеры для отладки
                toggleActions: "play none none none" // Определяет, что делать в моменты start, end, и так далее
            },
            top: 0,
            duration: .6
        });
    })
    gsap.to(".section2 .content-container .right img:nth-child(1)", {
        scrollTrigger: {
            scroller: ".main",
            trigger: `.section2 .content-container .right .banner-container`,
            start: "center bottom", // Анимация начнется, когда верх триггер-элемента достигнет нижней части вьюпорта
            end: "center bottom", // Анимация закончится, когда нижняя часть триггер-элемента покинет верх вьюпорта
            markers: false, // Показывает маркеры для отладки
            toggleActions: "play none none none" // Определяет, что делать в моменты start, end, и так далее
        },
        duration: 1.5,
        left: "15%",
        top: "25%"
    });
    gsap.to(".section2 .content-container .right img:nth-child(2)", {
        scrollTrigger: {
            scroller: ".main",
            trigger: `.section2 .content-container .right .banner-container`,
            start: "center bottom", // Анимация начнется, когда верх триггер-элемента достигнет нижней части вьюпорта
            end: "center bottom", // Анимация закончится, когда нижняя часть триггер-элемента покинет верх вьюпорта
            markers: false, // Показывает маркеры для отладки
            toggleActions: "play none none none" // Определяет, что делать в моменты start, end, и так далее
        },
        duration: 1.4,
        right: "0%",
        top: "-10%"
    });




}

