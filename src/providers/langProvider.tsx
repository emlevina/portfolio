
import { LangContext } from "../context/LangContext";
import React, { useState } from "react";

interface Props {
    children: React.ReactNode;
}

export const LangProvider: React.FC<Props> = ({ children }): JSX.Element => {
    const [lang, setLang] = useState<"eng" | "rus" | 'heb'>("eng");

    const changeLang = (str: "eng" | "rus" | 'heb') => {
        setLang(str)
    }
    
    return (
        <LangContext.Provider value={{ lang, changeLang }}>
            {children}
        </LangContext.Provider>
    );
};

export default LangContext;