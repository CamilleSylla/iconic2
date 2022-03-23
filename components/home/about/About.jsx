import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef, useEffect } from 'react'
import style from './about.module.scss'

const aboutData = [
    {
        title : "titre",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in mauris id neque finibus bibendum at vitae quam. Quisque ac orci tellus. Suspendisse interdum sagittis metus, sit amet rutrum tellus dictum at. Mauris lacus urna, malesuada vel odio ac, aliquam scelerisque libero. Donec iaculis bibendum nunc sed rutrum. Nulla eleifend rhoncus est quis bibendum."
    },
    {
        title : "titre",
        desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in mauris id neque finibus bibendum at vitae quam. Quisque ac orci tellus. Suspendisse interdum sagittis metus, sit amet rutrum tellus dictum at. Mauris lacus urna, malesuada vel odio ac, aliquam scelerisque libero. Donec iaculis bibendum nunc sed rutrum. Nulla eleifend rhoncus est quis bibendum."
    },
]

export default function About ()  {

    const phoneRef = useRef()
    const laptopRef = useRef()
    const startRef = useRef()

    const Article = ({data}) => {

        return (
            <article className={style.item}>
                <h2>{data.title}</h2>
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

        tl.to(phoneRef.current, {y: "-300"}, "end")
        tl.to(laptopRef.current, {y: "-100"}, "end")
    }, [])

    return ( 
        <section ref={startRef} className={style.wrapper}>
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