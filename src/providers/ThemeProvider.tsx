"use client"
import React, { createContext, useContext, useEffect, ReactNode } from 'react';

const ThemeContext = createContext<{ theme: string }>({ theme: 'light' });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const root = window.document.documentElement;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = prefersDark ? 'dark' : 'light';

    root.setAttribute('data-theme', theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'light' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
