"use client"
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
    theme: 'dark',
    setTheme: (t) => { },
});

export function ThemeProvider({ children }) {
    const [theme, setThemeState] = useState('light');

    useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark');
        setThemeState(isDark ? 'dark' : 'light');
    }, []);

    const setTheme = (t) => {
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(t);
        localStorage.setItem('theme', t);
        setThemeState(t);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
