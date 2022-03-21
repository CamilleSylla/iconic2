import { useContext } from 'react';
import { TalkFormContext } from '../../../context/TalkFormContext';
import style from './talk.module.scss'

export default function Functionnality () {
    const [talkForm, setTalkForm] = useContext(TalkFormContext)

    const onInputChange = (key, value) => {
        setTalkForm({...talkForm, functionnality : {...talkForm.functionnality, [key] : value}})
    } 
    return (
        <div>
            <textarea type='text'onChange={e => onInputChange("desc", e.target.value)} placeholder="Listez les fonctionalitées qui vous semble importante pour votre projet web."/>

        </div>
    )
}