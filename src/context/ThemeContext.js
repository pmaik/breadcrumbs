import React, { createContext, useContext, useState, useEffect } from "react";
import { LIGHT, DARK } from "../Constants";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(LIGHT);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === LIGHT ? DARK : LIGHT);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`app-container ${theme}`}>{children}</div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};
