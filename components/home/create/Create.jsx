import style from './create.module.scss'
import {useRef, useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

export default function Create () {

    const startRef = useRef()

    const Title = () => {

        return ( 
            <div className={style.title}>
                <h1>Construisez votre site web à votre image</h1>
                <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus sed nibh non feugiat.</p>
            </div>
        )
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const divs = startRef.current.getElementsByTagName('article')
        const convert = gsap.utils.toArray(divs)
        convert.forEach(el => {
            const scale = gsap.to(el,{ scale: .9 , duration: .5, paused: true, ease: "none"})
        el.addEventListener("mouseenter", () => scale.play());
        el.addEventListener("mouseleave", () => scale.reverse())
        })
        gsap.from(divs, {
            opacity: 0,
            y: "+200",
            stagger: .25,
            duration: .25,
            ease: "none",
            scrollTrigger: {
                trigger: startRef.current,
                start: "top bottom-=50%",
            }
        })
    }, [])

    const Steps = () => {
        return (
            <div ref={startRef} className={style.steps}>
                <article className={style.card}>
                    <img src='/assets/icon/talk.svg'/>
                    <h2 className='label'>Titre</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus sed nibh non feugiat.</p>
                </article>
                <article className={style.card}>
                    <img src='/assets/icon/talk.svg'/>
                    <h2 className='label'>Titre</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus sed nibh non feugiat.</p>
                </article>
                <article className={style.card}>
                    <img src='/assets/icon/talk.svg'/>
                    <h2 className='label'>Titre</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus sed nibh non feugiat.</p>
                </article>
            </div>
        )
    }


    return (
        <section className={style.wrapper} >
            <div className={style.container}>
                <Title/>
                <Steps/>
            </div>
        </section>
    )
}