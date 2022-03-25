import style from "./create.module.scss";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Create() {

  const startRef = useRef();

  const Title = () => {
    return (
      <div className={style.title}>
        <h1>Construisez votre site web à votre image</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus
          sed nibh non feugiat.
        </p>
      </div>
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const divs = startRef.current.getElementsByTagName("article");
    const convert = gsap.utils.toArray(divs);
    convert.forEach((el) => {
      const scale = gsap.to(el, {
        scale: 0.9,
        duration: 0.5,
        paused: true,
        ease: "none",
      });
      el.addEventListener("mouseenter", () => scale.play());
      el.addEventListener("mouseleave", () => scale.reverse());
    });
    gsap.from(divs, {
      opacity: 0,
      y: "+200",
      stagger: 0.25,
      duration: 0.25,
      ease: "none",
      scrollTrigger: {
        trigger: startRef.current,
        start: "top bottom-=50%",
      },
    });
  }, []);

  const Steps = () => {
    return (
      <div ref={startRef} className={style.steps}>
        <article className={style.card}>
          <svg height="6vh" fill="none" viewBox="0 0 24 24">
            <path
              stroke="var(--third-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M5.78168 19.25H13.2183C13.7828 19.25 14.227 18.7817 14.1145 18.2285C13.804 16.7012 12.7897 14 9.5 14C6.21031 14 5.19605 16.7012 4.88549 18.2285C4.773 18.7817 5.21718 19.25 5.78168 19.25Z"
            ></path>
            <path
              stroke="var(--third-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15.75 14C17.8288 14 18.6802 16.1479 19.0239 17.696C19.2095 18.532 18.5333 19.25 17.6769 19.25H16.75"
            ></path>
            <circle
              cx="9.5"
              cy="7.5"
              r="2.75"
              stroke="var(--third-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></circle>
            <path
              stroke="var(--third-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M14.75 10.25C16.2688 10.25 17.25 9.01878 17.25 7.5C17.25 5.98122 16.2688 4.75 14.75 4.75"
            ></path>
          </svg>
          <h2 className="label">Votre identité sur internet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            rhoncus sed nibh non feugiat.
          </p>
        </article>
        <article className={style.card}>
          <svg height="6vh" fill="none" viewBox="0 0 24 24">
            <path
              stroke="var(--third-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4.75 19.25L9 18.25L18.2929 8.95711C18.6834 8.56658 18.6834 7.93342 18.2929 7.54289L16.4571 5.70711C16.0666 5.31658 15.4334 5.31658 15.0429 5.70711L5.75 15L4.75 19.25Z"
            ></path>
            <path
              stroke="var(--third-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19.25 19.25H13.75"
            ></path>
          </svg>

          <h2 className="label">Un site internet design et animé</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            rhoncus sed nibh non feugiat.
          </p>
        </article>
        <article className={style.card}>
          <svg height="6vh" fill="none" viewBox="0 0 24 24">
            <path
              stroke="var(--third-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4.75 8H7.25"
            ></path>
            <path
              stroke="var(--third-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12.75 8H19.25"
            ></path>
            <path
              stroke="var(--third-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4.75 16H12.25"
            ></path>
            <path
              stroke="var(--third-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M17.75 16H19.25"
            ></path>
            <circle
              cx="10"
              cy="8"
              r="2.25"
              stroke="var(--third-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></circle>
            <circle
              cx="15"
              cy="16"
              r="2.25"
              stroke="var(--third-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></circle>
          </svg>

          <h2 className="label">Des fonctionnalitées adaptées</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            rhoncus sed nibh non feugiat.
          </p>
        </article>
      </div>
    );
  };

  return (
    <section id="create" className={style.wrapper}>
      <div className={style.container}>
        <Title />
        <Steps />
      </div>
    </section>
  );
}
