import "./Toggle.css"
import {useTheme} from "./ThemeProvider.jsx";

export const Toggle = () => {
    const {isDark, toggleTheme} = useTheme();
    return (
        <label htmlFor="toggle" className="theme-switch">
            <input
                type="checkbox"
                id="toggle"
                className="theme-switch__checkbox"
                checked={isDark}
                onChange={toggleTheme}
            />
            <span className="theme-switch__slider"></span>
        </label>
    )
}