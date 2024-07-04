import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function parallaxPoster() {

    gsap.registerPlugin( ScrollTrigger )

    const left = document.querySelector('.js-left')
    const right = document.querySelector('.js-right')
    const title = document.querySelector('.js-title')
    const illo = document.querySelector('.js-poster-illustration')

    if (left && right && title) {
        
        let mm = gsap.matchMedia();

        mm.add("(min-width: 1200px)", () => {

            gsap.fromTo(left, {width: '100%'}, {
                width: '66%',
                scrollTrigger: {
                    trigger: '.js-container',
                    start: "top",
                    end: "+=300",
                    // markers:true,
                    scrub: true
                }
            })

            if (illo) {
                gsap.fromTo(illo, {margin: '0'}, {
                    margin: '0 -0.5rem',
                    scrollTrigger: {
                        trigger: '.js-container',
                        start: "top",
                        end: "+=300",
                        // markers:true,
                        scrub: true
                    }
                })
            }

            gsap.fromTo(title, {letterSpacing: '2px'}, {
                letterSpacing: '-2px',
                autoRound: false,
                scrollTrigger: {
                    trigger: '.js-container',
                    start: "top",
                    end: "+=300",
                    // markers:true,
                    scrub: true
                }
            })

            gsap.fromTo(right, {translateX: "100%"}, {
                translateX: "0%",
                scrollTrigger: {
                    trigger: '.js-container',
                    start: "top 10%",
                    end: "+=400",
                    // markers:true,
                    scrub: true
                }
            })
        })
    }
}