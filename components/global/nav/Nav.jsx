import style from "./nav.module.scss";
import { useState, useRef, useEffect, useContext } from "react";
import gsap from "gsap";
import { NavContext } from "../../../context/NavContext";

export default function Nav() {
  const [nav, setNav] = useContext(NavContext)
  const hamRef = useRef();
  const menuRef = useRef();
  const listRef = useRef();
  const [open, setOpen] = useState(false);
  let menuOpen = false;


  const Menu = () => {
    return (
      <div ref={menuRef} className={style.menu}>
        <ul ref={listRef}>
          <li>
            <p>Accueil</p>
          </li>
          <li>
            <p>A Propos</p>
          </li>
          <li>
            <p>Votre site internet</p>
          </li>
          <li>
            <p>Domaines</p>
          </li>
          <li>
            <p>Dernières réalisations</p>
          </li>
          <li>
            <p>Demarrer un projet</p>
          </li>
        </ul>
      </div>
    );
  };

  const Hamburger = () => {
    return (
      // <div onClick={() => setOpen(!open)}>
      <div ref={hamRef} className="hamburger_btn">
        <div className="hamburger_background" />
        <div className="hamburger"></div>
      </div>
      // </div>
    );
  };
  useEffect(() => {
    const li = listRef.current.getElementsByTagName("li");
    const convertLi = gsap.utils.toArray(li);

    convertLi.map((el, i) => {
      el.addEventListener('click', () => {
        console.log(i ,nav[i].offsetTop, convertLi.length, nav.length);
        window.scroll({ top :nav[i].offsetTop, behavior : "smooth"})
        menuOpen = false
      })
    })

    const burger = document.querySelector(".hamburger_btn");
    const burgerBack = document.querySelector(".hamburger_background");
    const list = listRef.current.getElementsByTagName("p");
    const convertedList = gsap.utils.toArray(list);
    burger.addEventListener("click", () => {
      if (!menuOpen) {
        // const x = window.scrollX;
        // const y = window.scrollY;
        // window.onscroll = function () {
        //   window.scrollTo(x, y);
        // };

        burger.classList.add("open");
        burgerBack.classList.add("open");
        menuOpen = true;
        setTimeout(() => {
          menuRef.current.style.visibility = "initial";

          gsap.from(convertedList, {
            y: "+=100",
            stagger: 0.1,
            duration: 0.25,
          });
        }, 1750);
      } else {
        gsap.to(convertedList, {
          y: "+=100",
          stagger: 0.1,
          duration: 0.25,
        });
        setTimeout(() => {
          burger.classList.remove("open");
          burgerBack.classList.remove("open");
          menuOpen = false;
          window.onscroll = function () {};
          menuRef.current.style.visibility = "hidden";
        }, 1000);
      }
    });
    // setOpen(menuOpen)
  }, [menuOpen]);

  return (
    <>
      <nav className={style.wrapper}>
        <div className={style.container}>
          <img
            onClick={() => window.scrollTo(0, 0)}
            src="/assets/logo/ID.svg"
          />
          <Hamburger />
        </div>
      </nav>
      <Menu />
    </>
  );
}
