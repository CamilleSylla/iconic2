import React, { useState, createContext } from "react";

export const TalkFormContext = createContext();

export function TalkFormProvider(props) {
    const [talkForm, setTalkForm] = useState({
        personnal: {}
    })
  return (
    <TalkFormContext.Provider value={[talkForm, setTalkForm]}>
      {props.children}
    </TalkFormContext.Provider>
  );
}