import style from './nav.module.scss'

export default function Nav () {

    return (
        <nav className={style.wrapper}>
            <div className={style.container}>
                <img src="/assets/logo/ID.svg"/>
            </div>
        </nav>
    )
}