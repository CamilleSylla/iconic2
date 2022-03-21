import style from "./ecoute.module.scss";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";


const accordionData = [
  {
    title: "Element",
    desc: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    title: "Element",
    desc: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
  {
    title: "Element",
    desc: "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
];

export default function Ecoute() {
  const Illustration = () => {
    return (
      <div className={style.illustration}>
        <div className={style.blur}>
          <img src="https://www.commpagnie.fr/wp-content/uploads/2019/09/zendesk-landing-page-1024x501.jpg" />
        </div>
      </div>
    );
  };

  const Content = () => {
    return (
      <div className={style.content}>
        <h2>Titre</h2>
        <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat</p>
        <Accordion>
          {accordionData.map((el, i) => {
            return (
              <AccordionItem className={style.acc_item}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                      <h3>{el.title}</h3>
                      </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    {el.desc}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    );
  };

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <Illustration />
        <Content />
      </div>
    </section>
  );
}
