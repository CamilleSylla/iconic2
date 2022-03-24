import { useState, useRef, useContext } from "react";
import Business from "./Business";
import Functionnality from "./Functionnality";
import Goal from "./Goal";
import Graphique from "./Graphique";
import Personnal from "./Personnal";
import style from "./talk.module.scss";
import { TalkFormContext } from "../../../context/TalkFormContext";


export default function Talk() {

  const [page, setPage] = useState(0);



  const Form = () => {
    return (
      <div className={style.form_wrapper}>
        <div className={style.progress}></div>
        <div className={style.form_container}>
          <div className={style.header}>
          </div>
          <div className={style.body}>
            <Personnal/>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
      <h1>Vous avez un projet ?</h1>
        <Form/>
      </div>
      {/* <img src={illustrations[page]}/> */}
      {/* <Form /> */}
    </section>
  );
}
