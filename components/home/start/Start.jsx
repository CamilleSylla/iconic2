import style from './start.module.scss'
import {useRef, useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

export default function Start () {

    const startRef = useRef()
    const divRef = useRef()
    const gridRef = useRef()
    
    const Content = () => {

        return (
            <div className={style.content}>
                <div className={style.blur}>
                    <div className={style.container}>
                        <h2>Domaines d'intervention</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button>Prenons contact</button>
                    </div>
                </div>
            </div>
        )
    }

    const Grid = () => {
        return (
            <div ref={gridRef} className={style.grid_container}>
                <div ref={divRef} className={style.grid}>
                    <div>
                        <img src='/assets/icon/talk.svg'/>
                        <h3 className='label'>titre</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <img src='/assets/icon/talk.svg'/>
                        <h3 className='label'>titre</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <img src='/assets/icon/talk.svg'/>
                        <h3 className='label'>titre</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <img src='/assets/icon/talk.svg'/>
                        <h3 className='label'>titre</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <img src='/assets/icon/talk.svg'/>
                        <h3 className='label'>titre</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <img src='/assets/icon/talk.svg'/>
                        <h3 className='label'>titre</h3>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        )
    }
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const divs = divRef.current.getElementsByTagName('div')
        const convert = gsap.utils.toArray(divs)
        convert.forEach(el => {
            const scale = gsap.to(el,{ scale: .85, duration: .5, paused: true, ease: "none"})
        el.addEventListener("mouseenter", () => scale.play());
        el.addEventListener("mouseleave", () => scale.reverse())
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: startRef.current,
                start: "top+=25% bottom",
                end: "bottom bottom"
            }
        })

        tl.from(gridRef.current, {
            x : "100%",
            duration: 1,
            ease: "power2.inOut"
        })

        tl.from(divs ,{
            opacity: 0,
            stagger: .25,
            ease: "none",
            duration: .1,
        })



    }, [])

    return (
        <section ref={startRef}className={style.wrapper}>
            <Content/>
            <Grid/>
        </section>
    )
}