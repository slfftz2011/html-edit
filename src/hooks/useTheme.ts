import { useEffect, useState } from 'react';
import type { ThemeName } from '../types';

const KEY = 'html-edit:theme';
const MONACO_MAP: Record<ThemeName, string> = {
  light: 'vs',
  dark: 'vs-dark',
  bright: 'hc-light',
};

export function useTheme() {
  const [theme, setTheme] = useState<ThemeName>(
    () => (localStorage.getItem(KEY) as ThemeName) || 'light',
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(KEY, theme);
  }, [theme]);

  return { theme, setTheme, monacoTheme: MONACO_MAP[theme] };
}