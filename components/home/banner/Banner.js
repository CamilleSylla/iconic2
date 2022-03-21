import style from './banner.module.scss'

export default function Banner () {

    const Title = () => {

        return (
            <div className={style.content}>
                <div className={style.container}>
                    <h1>Camille Sylla, développeur web indépendant basé à Saint-Quentin</h1>
                    <h2>Créer votre site internet et/ou votre solution web.</h2>
                    <button>Services</button>
                    {/* <p>Franchissez le cap du digital et envahissez un monde où les limites ne sont qu'imaginaires...</p> */}
                </div>
            </div>
        )
    }

    const Illustration = () => {

        return (
            <div className={style.illustration}>

            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <Title/>
            <Illustration/>
        </section>
    )
}