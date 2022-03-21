import { useState } from "react";
import Business from "./Business";
import Functionnality from "./Functionnality";
import Goal from "./Goal";
import Graphique from "./Graphique";
import Personnal from "./Personnal";
import style from "./talk.module.scss";

export default function Talk() {
  const [page, setPage] = useState(0);

  const formTitle = [
    "Informations de l'entreprise",
    "Objectif et cible",
    "Fonctionnalitées",
    "Style graphique",
    "Informations personnelles",
  ];
  const illustrations = [
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1630104577545-69455476417f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    "https://images.unsplash.com/photo-1635492491273-455af7728453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80",
    "https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "https://images.unsplash.com/photo-1624380715369-1bd869df8096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  ]

  const PageDisplay = () => {
    if (page == 0) {
      return <Business />;
    }
    if (page == 1) {
      return <Goal />;
    }
    if (page == 2) {
      return <Functionnality />;
    }
    if (page == 3) {
      return <Graphique />;
    }
    if (page == 4) {
      return <Personnal />;
    }
  };

  const Form = () => {
    return (
      <div className={style.form_wrapper}>
        <h1>Discutons de votre projet</h1>
        <div className={style.progress}></div>
        <div className={style.form_container}>
          <div className={style.header}>
            <h1>{formTitle[page]}</h1>
          </div>
          <div className={style.body}>
            <PageDisplay />
          </div>
          <div className={style.footer}>
            <button
              disabled={page == 0}
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Précédent
            </button>
            {page == formTitle.length - 1 ? (
              <button>Envoyer</button>
            ) : (
              <button
                disabled={page == formTitle.length - 1}
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                Suivant
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={style.wrapper}>
      <img src={illustrations[page]}/>
      <Form />
    </section>
  );
}
