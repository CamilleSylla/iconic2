import { useContext } from 'react'
import { TalkFormContext } from '../../../context/TalkFormContext'
import style from './talk.module.scss'

export default function Graphique () {

    const [talkForm, setTalkForm] = useContext(TalkFormContext)

    const onInputChange = (key, value) => {
        setTalkForm({...talkForm, graphique : {...talkForm.graphique, [key] : value}})
    } 

    return (
        <div>
            <label>
                Possèdez-vous un logo ?
                <input onChange={e => onInputChange("logo", e.target.value)} className='checkbox' type="checkbox"/>
            </label>
            <label>
                Possèdez-vous une charte graphique ?
                <input onChange={e => onInputChange("charte", e.target.value)} className='checkbox' type="checkbox"/>
            </label>
            <label>
                Possèdez-vous une maquette web pour le site ?
                <input onChange={e => onInputChange("maquette", e.target.value)} className='checkbox' type="checkbox"/>
            </label>
            <label>
                Possèdez-vous un nom de domaine ?
                <input onChange={e => onInputChange("domaine", e.target.value)} className='checkbox' type="checkbox"/>
            </label>
        </div>
    )
}