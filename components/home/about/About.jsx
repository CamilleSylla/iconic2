import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef, useEffect } from 'react'
import style from './about.module.scss'

const aboutData = [
    {
        title : "Choisissez l'expertise IconicDev",
        desc : "Vous souhaitez créer votre site internet ou une refonte ? IconicDev - Camille Sylla est spécialisé dans la création de site internet et vous accompagnera du début à la fin de la conception de votre site, et même après son lancement."
    },
    {
        title : " La mission, retranscrire votre image sur votre site internet",
        desc : "Aujourd’hui, un site web est devenu obligatoire pour donner de la crédibilité à votre entreprise. Un site sur-mesure design et à votre image vous permettra de vous différencier de vos concurrent et d’offrir à vos utilisateurs une expérience unique"
    },
]

export default function About ()  {

    const phoneRef = useRef()
    const laptopRef = useRef()
    const startRef = useRef()

    const Article = ({data}) => {

        return (
            <article className={style.item}>
                <h2 className='label'>{data.title}</h2>
                <p>{data.desc}</p>
            </article>
        )
    }
    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: startRef.current,
              start: "top+=50% bottom",
              end: "bottom+=50% bottom",
              scrub: .5
            },
          })

        tl.to(phoneRef.current, {y: "-500"}, "end")
        tl.to(laptopRef.current, {y: "-100"}, "end")
    }, [])

    return ( 
        <section id="about" ref={startRef} className={style.wrapper}>
            <img ref={phoneRef} className={style.ill} src="https://isometric.online/wp-content/uploads/2019/07/Mobile_notification_SVG.svg"/>
            <img ref={laptopRef} className={style.ill_blur} src="https://isometric.online/wp-content/uploads/2019/07/workspace_SVG.svg"/>
            <div className={style.container}>
            <h1>Création de site internet sur Saint-Quentin</h1>
            <div className={style.content}>
                {aboutData.map((el, i) => {
                    return <Article data={el} key={el.title + i}/>
                })}
            </div>

            </div>
        </section>
    )
}