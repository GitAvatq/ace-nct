"use client"
import useTheme from '@/shared/hooks/useTheme';
import { createContext, ReactNode, useContext } from 'react';

type ThemeContextType = ReturnType<typeof useTheme>;

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const themeUtils = useTheme()
    return (
        <ThemeContext.Provider value={themeUtils}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within ThemeProvider');
    }
    return context;
};