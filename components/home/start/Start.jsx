import style from './start.module.scss'

export default function Start () {
    
    const Content = () => {

        return (
            <div className={style.content}>
                <div className={style.blur}>
                    <div className={style.container}>
                        <h1>Mon activité</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button>Prenons contact</button>
                    </div>
                </div>
            </div>
        )
    }

    const Grid = () => {
        return (
            <div className={style.grid_container}>
                <div className={style.grid}>
                    <div>
                        <img src='/assets/icon/talk.svg'/>
                        <h3>titre</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <img src='/assets/icon/talk.svg'/>
                        <h3>titre</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <img src='/assets/icon/talk.svg'/>
                        <h3>titre</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <img src='/assets/icon/talk.svg'/>
                        <h3>titre</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <img src='/assets/icon/talk.svg'/>
                        <h3>titre</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div>
                        <img src='/assets/icon/talk.svg'/>
                        <h3>titre</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <Content/>
            <Grid/>
        </section>
    )
}