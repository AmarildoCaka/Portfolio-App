import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = (theme) => {

        if(theme === 'dark')
        {

            setDarkMode(true);

            localStorage.setItem('theme', 'dark');

        }
        
        else if(theme === 'light')
        {

            setDarkMode(false);

            localStorage.setItem('theme', 'light');

        }

        document.documentElement.classList.toggle('dark', theme === 'dark');

    };

    const applySystemTheme = () => {

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        setDarkMode(prefersDark);

        localStorage.setItem('theme', 'system');

    };

    useEffect(() => {

        const savedTheme = localStorage.getItem('theme');

        if(savedTheme === 'dark')
        {

            setDarkMode(true);

        }
        
        else if(savedTheme === 'light')
        {

            setDarkMode(false);

        }

    }, []);


    return (

        <ThemeContext.Provider value={
            
            {
                
                darkMode,
                
                toggleTheme,
                
                applySystemTheme
                
            }
                
        }>

            {children}

        </ThemeContext.Provider>

    );

}