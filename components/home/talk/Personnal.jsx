import { useContext, useRef } from 'react';
import { TalkFormContext } from '../../../context/TalkFormContext';
import style from './talk.module.scss'
import { toast } from 'react-toastify';


export default function Personnal () {
    const [talkForm, setTalkForm] = useContext(TalkFormContext)

    const onInputChange = (key, value) => {
        setTalkForm({...talkForm, personnal : {...talkForm.personnal, [key] : value}})
        console.log(talkForm);
    } 
    const sendBtnRef = useRef()
  const onFormSubmit = e => {
    const test = true

    sendBtnRef.current.disabled = true
    toast.success(`Merci ${talkForm.personnal.name} votre message a bien été envoyé ! 👍🏽🥳`, {
      className: style.toast,
    })
  }

    return (
        <div>
            <p>
                Bonjour, je m'appelle 
            <input onChange={e => onInputChange("name", e.target.value)} type="text" placeholder='Nom et prénom'/>
            et je représente 
            <select onChange={e => onInputChange("represente", e.target.value)}>
                <option>moi même</option>
                <option>une PME</option>
                <option>une association</option>
                <option>autre</option>
            </select>. 
            Je souhaite 
            <select onChange={e => onInputChange("goal", e.target.value)}>
                <option>créer mon site internet</option>
                <option>faire la refonte de mon site internet</option>
                <option>engager un freelance</option>
                <option>simplement me renseigner sur la création de site internet</option>
            </select>.
            Vous pourrez me contacter a l'adresse email suivante 
            <input onChange={e => onInputChange("email", e.target.value)} type="email" placeholder='Email'/>.
            <br/>
            A bientôt {"☺️"}.
            </p>
            <button
              ref={sendBtnRef}
              onClick={onFormSubmit}
                // disabled={page == formTitle.length - 1}
              >
                Envoyer
              </button>
        </div>
    )
}