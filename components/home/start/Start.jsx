import style from "./start.module.scss";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Start() {
  const startRef = useRef();
  const divRef = useRef();
  const gridRef = useRef();

  const Content = () => {
    return (
      <div className={style.content}>
        <div className={style.blur}>
          <div className={style.container}>
            <h2>Domaines d'intervention</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Prenons contact</button>
          </div>
        </div>
      </div>
    );
  };

  const Grid = () => {
    return (
      <div ref={gridRef} className={style.grid_container}>
        <div ref={divRef} className={style.grid}>
          <div>
            <svg height="6vh" fill="none" viewBox="0 0 24 24">
              <path
                stroke="var(--third-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-Width="1.5"
                d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V8.18322C19.2502 7.89772 19.1891 7.61553 19.071 7.35561L18.5332 6.17239C18.2086 5.45841 17.4967 5 16.7124 5H7.28807C6.50378 5 5.79188 5.45841 5.46734 6.1724L4.92951 7.35561C4.81137 7.61553 4.75024 7.89772 4.75024 8.18322V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z"
              ></path>
              <path
                stroke="var(--third-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.5 7.75C9.5 8.99264 8.5 10.25 7 10.25C5.5 10.25 4.75 8.99264 4.75 7.75"
              ></path>
              <path
                stroke="var(--third-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19.25 7.75C19.25 8.99264 18.5 10.25 17 10.25C15.5 10.25 14.5 8.99264 14.5 7.75"
              ></path>
              <path
                stroke="var(--third-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M14.5 7.75C14.5 8.99264 13.5 10.25 12 10.25C10.5 10.25 9.5 8.99264 9.5 7.75"
              ></path>
              <path
                stroke="var(--third-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z"
              ></path>
            </svg>

            <h3 className="label">Site Vitrine</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <svg height="6vh" fill="none" viewBox="0 0 24 24">
              <path
                stroke="var(--third-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M18.25 7.75H5.75V16.75L4.75 19.25H19.25L18.25 16.75V7.75Z"
              ></path>
              <path
                stroke="var(--third-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M18.25 7.75L16.25 4.75H7.75L5.75 7.75"
              ></path>
              <path
                stroke="var(--third-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.75 10.75V11.75C9.75 12.9926 10.7574 14 12 14V14C13.2426 14 14.25 12.9926 14.25 11.75V10.75"
              ></path>
            </svg>

            <h3 className="label">Site E-commerce</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div>
            <svg width="6vh" fill="none" viewBox="0 0 24 24">
              <path
                stroke="var(--third-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V7.75H17.25C18.3546 7.75 19.25 8.64543 19.25 9.75V12.25"
              ></path>
              <path
                stroke="var(--third-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M13.5 7.5L12.5685 5.7923C12.2181 5.14977 11.5446 4.75 10.8127 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V11"
              ></path>
              <path
                stroke="var(--third-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17 14.75V19.25"
              ></path>
              <path
                stroke="var(--third-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19.25 17L14.75 17"
              ></path>
            </svg>

            <h3 className="label">Site administratif</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <img src="/assets/icon/handcheck.svg" />
            <h3 className="label">Site associatif</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <img src="/assets/icon/stars.svg" />
            <h3 className="label">refonte de site</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <img src="/assets/icon/freelance.svg" />
            <h3 className="label">freelancing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const divs = divRef.current.getElementsByTagName("div");
    const convert = gsap.utils.toArray(divs);
    convert.forEach((el) => {
      const scale = gsap.to(el, {
        scale: 0.85,
        duration: 0.5,
        paused: true,
        ease: "none",
      });
      el.addEventListener("mouseenter", () => scale.play());
      el.addEventListener("mouseleave", () => scale.reverse());
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: startRef.current,
        start: "top+=25% bottom",
        end: "bottom bottom",
      },
    });

    tl.from(gridRef.current, {
      x: "100%",
      duration: 1,
      ease: "power2.inOut",
    });

    tl.from(divs, {
      opacity: 0,
      stagger: 0.25,
      ease: "none",
      duration: 0.1,
    });
  }, []);

  return (
    <section ref={startRef} className={style.wrapper}>
      <Content />
      <Grid />
    </section>
  );
}
