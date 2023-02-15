import React from "react";

type ContextType = {
    lang: "eng" | "rus" | "heb";
    changeLang: (lang: "eng" | "rus" | "heb") => void;
};

export const LangContext = React.createContext<ContextType>({
    lang: "eng",
    changeLang: () => {}
});