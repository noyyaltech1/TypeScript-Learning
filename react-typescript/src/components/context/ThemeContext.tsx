import {createContext} from 'react';
import {theme} from './theme';
type ThemeContextType = {
    children: React.ReactNode;
}
export const ThemeContext = createContext(theme);
export const ThemeContextProvider = (props: ThemeContextType) => {
    return (    
        <ThemeContext.Provider value={theme}>
            {props.children}
        </ThemeContext.Provider>
    )
}