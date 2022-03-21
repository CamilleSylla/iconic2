import style from './project.module.scss'

const projectData = [
    {
        name : "Demetis Immo",
        type : "Site de promotion immobilière",
        logo: "data:image/png;base64,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",
        mockup : "/assets/mockups/demetisimmo.jpg"
    },
    {
        name : "DunesGST",
        type : "Site vitrine de sport avec réservation en ligne",
        logo: "https://www.dunesgst.fr/assets/logo/logo.svg",
        mockup : "/assets/mockups/dunes.jpg"
    },
    {
        name : "Montcornet",
        type : "Site administratif",
        logo: "https://montcornet.fr/assets/Logo/logo.svg",
        mockup : "/assets/mockups/montcornet.jpg"
    },
    {
        name : "Demetis Conseil",
        type : "Site vitrine",
        logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQGqkJYIGytVmA/company-logo_200_200/0/1623164216166?e=2159024400&v=beta&t=jDT8v5SrOiqkHYfRdNg1S9iX6OtTtsaQy8OytseyLPU",
        mockup : "/assets/mockups/demetisconseil.jpg"
    },
    {
        name : "OP Consult",
        type : "Site vitrine",
        logo: "https://www.opconsult.fr/wp-content/uploads/2020/10/cropped-Logo-OPCONSULT-1-215x51.png",
        mockup : "/assets/mockups/opconsult.jpg"
    },
]

export default function Project () {

    const Card = ({el}) => {
        return (
            <div className={style.card}>
                <div className={style.text}>
                    <img src={el.logo}/>
                    <h3>{el.name}</h3>
                    <p>{el.type}</p>
                </div>
                <img className={style.mockup} src={el.mockup} alt="Demetis Immo"/>
            </div>
        )
    }

    return (
        <section className={style.wrapper}>
            <div className={style.container}>
                <h2>Dernierès réalisations</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae ex pellentesque, maximus arcu sed, ultrices eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                {projectData.map((el, i) => {
                    return <Card el={el}/>
                })}
            </div>
        </section>
    )
}