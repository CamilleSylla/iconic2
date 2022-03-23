import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef, useEffect } from 'react'
import style from './banner2.module.scss'

export default function Banner2 () {

    const containerRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const articles = containerRef.current.getElementsByTagName('article')
        console.log(articles);
        gsap.from(articles, {
            // delay: .5,
            stagger: .35,
            duration: 1, 
            ease: "none",
             y: 100,
              opacity: 0
        })
    },[]) 

    return( 
        <section className={style.wrapper}>
            <div ref={containerRef} className={style.container}>
                <article className={style.main}>
                    <div className={style.filter}/>
                    <div className={style.title}>
                        <h1>Dernierès réalisation</h1>
                        <p className='label'>Découvrez les dernières créations web de IconicDev</p>
                    </div>
                </article>
                <article className={style.second}>
                    <div className={style.ill_wrapper}>
                    <div className={style.ill}/>

                    </div>
                    <div className={style.title}>
                        <h1>Créer mon projet web</h1>
                        <p className='label'>Connaitre votre créateur de site internet</p>
                    </div>

                </article>
                <article className={style.third}>
                <div className={style.title}>
                        <h1>A Propos d'IconicDev</h1>
                        <p className='label'>Connaitre votre créateur de site internet</p>
                    </div>
                </article>
            </div>
        </section>
    )
}