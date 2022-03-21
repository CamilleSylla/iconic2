import style from './footer.module.scss'

export default function Footer () {

    return (
        <footer className={style.wrapper}>
            <ul>
                <li>Copyright</li>
                <li>Mentions Légales</li>
                <li>CGV</li>
            </ul>
        </footer>
    )
}