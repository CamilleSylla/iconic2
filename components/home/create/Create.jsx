import style from './create.module.scss'

export default function Create () {

    const Title = () => {

        return ( 
            <div className={style.title}>
                <h1>Construisez votre site web à votre image</h1>
                <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus sed nibh non feugiat.</p>
            </div>
        )
    }

    const Steps = () => {
        return (
            <div className={style.steps}>
                <div className={style.card}>
                    <img src='/assets/icon/talk.svg'/>
                    <h2>Titre</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus sed nibh non feugiat.</p>
                </div>
                <div className={style.card}>
                    <img src='/assets/icon/talk.svg'/>
                    <h2>Titre</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus sed nibh non feugiat.</p>
                </div>
                <div className={style.card}>
                    <img src='/assets/icon/talk.svg'/>
                    <h2>Titre</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus sed nibh non feugiat.</p>
                </div>
            </div>
        )
    }


    return (
        <section className={style.wrapper} >
            <div className={style.container}>
                <Title/>
                <Steps/>
            </div>
        </section>
    )
}