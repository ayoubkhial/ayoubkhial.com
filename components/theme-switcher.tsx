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

    if (currentTheme === 'dark') {
      return (
        <button
          role="button"
          aria-label="light-mode"
          onClick={() => setTheme('light')}
          className="rounded-full bg-[#2a3650] p-1 transition-colors duration-300 hover:bg-[#3a4760]"
        >
          <SunIcon />
        </button>
      );
    } else {
      return (
        <button
          aria-label="dark-mode"
          role="button"
          onClick={() => setTheme('dark')}
          className="rounded-full bg-[#F0F0FB] p-1 transition-colors duration-300 hover:bg-[#E5E5F9]"
        >
          <MoonIcon />
        </button>
      );
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
