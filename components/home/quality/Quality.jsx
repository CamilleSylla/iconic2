import style from './quality.module.scss'

export default function Quality () {

    return (
        <section className={style.wrapper}>
            <div className={style.container}>
                <div className={style.stats}>
                    <div className={style.item}>
                        <h2><span>57</span> projets</h2>
                        <p>depuis 2018</p>
                    </div>
                    <div className={style.item}>
                        <h2><span>100%</span> adapté</h2>
                        <p>La solution qui vous correspond</p>
                    </div>
                    <div className={style.item}>
                        <h2><span>100%</span> adapté</h2>
                        <p>La solution qui vous correspond</p>
                    </div>
                </div>
                <div className={style.avis}>
                    <div className={style.avis_wrapper}>
                        <p>" Très heureux d'avoir collaboré avec Camille pour la création de mon site internet.
Camille est très professionnel, réactif et a le sens du détail! "</p>
                        <div className={style.redacteur}>
                            <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGqkJYIGytVmA/company-logo_200_200/0/1623164216166?e=2159024400&v=beta&t=jDT8v5SrOiqkHYfRdNg1S9iX6OtTtsaQy8OytseyLPU"/>
                            <p>-  Demetis Conseil</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}