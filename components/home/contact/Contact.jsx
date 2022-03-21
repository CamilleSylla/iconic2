import { useRef, useEffect, useState } from 'react'
import style from './contact.module.scss'

export default function Contact () {

    const [open, setOpen] = useState(false)
    const contactRef = useRef()

    const Form = () => {
        return (
            <div ref={contactRef} className={style.form}>
                <div>
                <input type="text" placeholder='Nom et prénom'/>
                <input type="email" placeholder='Email'/>
                <textarea placeholder='Votre message'/>
                <button>Envoyer</button>
                </div>
            </div>
        )
    }

    useEffect(() => {
        const form = contactRef.current
        if (open === true) {
            form.style.transform = "translate3d(0, 0, 0)"
        } 
        if (open === false) {
            form.style.transform = "translate3d(100%, 0, 0)"            
        }
    }, [open])

    return (
        <section className={style.wrapper}>
            <div className={style.filter}>
                <Form/>
                <h1>Prenons un premier contact</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu diam, vulputate ac tincidunt eget,</p>
                <button onClick={() => setOpen(!open)}>Contact</button>
            </div>
        </section>
    )
}