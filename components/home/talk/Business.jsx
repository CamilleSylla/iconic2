import { useContext } from 'react'
import { TalkFormContext } from '../../../context/TalkFormContext'
import style from './talk.module.scss'

export default function Business () {

    const [talkForm, setTalkForm] = useContext(TalkFormContext)

    const onInputChange = (key, value) => {
        setTalkForm({...talkForm, business : {...talkForm.business, [key] : value}})
        console.log(talkForm);
    } 
    return (
        <div className={style.business}>
            <p>
            <input type='text' onChange={e => onInputChange("name",e.target.value)} placeholder="Nom de l'entreprise"/>
            <input type='tel' onChange={e => onInputChange("tel",e.target.value)} placeholder="N° téléphone de l'entreprise"/>
            <input type='text' onChange={e => onInputChange("activity",e.target.value)} placeholder="Décrivez votre activité"/>
            <input type='text' onChange={e => onInputChange("siret",e.target.value)} placeholder="SIRET / SIREN (si existant)"/>
            <label for="siteweb">Possedez vous deja un site web
            <input className='checkbox' onChange={e => onInputChange("existing_website",e.target.value)} type='checkbox' id="siteweb"/>
            </label>
            {talkForm.business.existing_website === "on" ?(
            <input type='text' onChange={e => onInputChange("website_url",e.target.value)} placeholder="url du site internet de l'entreprise"/>
            ) : null}
            </p>
        </div>
    )
}