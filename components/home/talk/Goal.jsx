import { useContext } from 'react';
import { TalkFormContext } from '../../../context/TalkFormContext';
import style from './talk.module.scss'

export default function Goal () {

    const [talkForm, setTalkForm] = useContext(TalkFormContext)

    const onInputChange = (key, value) => {
        setTalkForm({...talkForm, goal : {...talkForm.goal, [key] : value}})
        
    } 
    
    return (
        <div className={style.business}>
            <input onChange={e => onInputChange("target", e.target.value)} type='text' placeholder="Quel sont vos cibles ?"/>
            <textarea onChange={e => onInputChange("goal", e.target.value)} type='text' placeholder="Quel sont les objectifs du sites ?"/>
        </div>
    )
}