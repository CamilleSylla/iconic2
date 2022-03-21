import { useContext } from 'react';
import { TalkFormContext } from '../../../context/TalkFormContext';
import style from './talk.module.scss'

export default function Personnal () {
    const [talkForm, setTalkForm] = useContext(TalkFormContext)

    const onInputChange = (key, value) => {
        setTalkForm({...talkForm, personnal : {...talkForm.personnal, [key] : value}})
        console.log(talkForm);
    } 

    return (
        <div>
            <input onChange={e => onInputChange("name", e.target.value)} type="text" placeholder='Nom et prénom'/>
            <input onChange={e => onInputChange("email", e.target.value)} type="email" placeholder='Email'/>
            <input onChange={e => onInputChange("tel", e.target.value)} type="tel" placeholder='N° de téléphone'/>
        </div>
    )
}