import {createContext, useContext, useEffect, useState} from "react";


const ThemeContext = createContext(null);
export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(()=>{
        return localStorage.getItem("theme") === 'dark'
    });
    const toggleTheme = ()=>{
        setIsDark( (prev) => !prev);
    }
    useEffect(() => {
        if( isDark){
            document.body.classList.add("dark-theme");
            localStorage.setItem('theme', 'dark');
        }
        else{
            document.body.classList.remove("dark-theme");
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);
    return (
        <ThemeContext.Provider  value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used only in <ThemeProvider/>!');
    return context;

}