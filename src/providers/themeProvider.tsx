
import { ThemeContext } from "../context/ThemeContext";
import React, { useState } from "react";

interface Props {
    children: React.ReactNode;
  }

export const ThemeProvider: React.FC<Props> = ({ children }): JSX.Element => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = (): void => {
        const val = theme === "light" ? "dark" : "light";
        setTheme(val);
        //localStorage.setItem("ui.theme", val);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;