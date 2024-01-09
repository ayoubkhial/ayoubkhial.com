'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from './icons';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'light') {
      return (
        <button
          role="button"
          aria-label="light-mode"
          onClick={() => setTheme('dark')}
          className="rounded-full p-2 transition-colors duration-300 hover:bg-slate-100"
        >
          <SunIcon />
        </button>
      );
    } else {
      return (
        <button
          aria-label="dark-mode"
          role="button"
          onClick={() => setTheme('light')}
          className="rounded-full p-2 transition-colors duration-300 hover:bg-slate-700"
        >
          <MoonIcon />
        </button>
      );
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
