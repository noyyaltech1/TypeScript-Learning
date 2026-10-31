import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
export const Box = () => {
    const theme = useContext(ThemeContext);
    return (
        <div style={{backgroundColor: theme.primary, color: theme.secondary, padding: '2rem'}}>
            <p>Box Component</p>
        </div>
    )
}