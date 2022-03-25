import { useState, useRef, useContext } from "react";
import Personnal from "./Personnal";
import style from "./talk.module.scss";


export default function Talk() {

  const [page, setPage] = useState(0);



  const Form = () => {
    return (
      <div className={style.form_wrapper}>
        <div className={style.form_container}>
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
