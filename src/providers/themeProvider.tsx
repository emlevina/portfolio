
import { ThemeContext } from "../context/ThemeContext";
import React, { useState } from "react";

interface Props {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }): JSX.Element => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    const [theme, setTheme] = useState<"light" | "dark">(darkThemeMq.matches ? "dark" : "light");

    if(theme === 'dark'){
        document.body.classList.add('dark')
    }
    
    const toggleTheme = (): void => {
        const val = theme === "light" ? "dark" : "light";
        setTheme(val);
        document.body.classList.toggle('dark')
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;