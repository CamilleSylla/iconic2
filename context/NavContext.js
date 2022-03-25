import React, { useState, createContext, useEffect } from "react";

export const NavContext = createContext();

export function NavProvider(props) {
    const [nav, setNav] = useState({})

    useEffect(() => {
      const acceuil = document.getElementById('top')
      const aPropos = document.getElementById('about')
      const votreSite = document.getElementById('create')
      const domaines = document.getElementById('domaines')
      const projects = document.getElementById('projects')
      const contact = document.getElementById('contact')
      setNav([, acceuil, aPropos, votreSite, domaines, projects, contact]);
      console.log([acceuil, aPropos, votreSite, domaines, projects, contact]);
    },[])
  return (
    <NavContext.Provider value={[nav, setNav]}>
      {props.children}
    </NavContext.Provider>
  );
}