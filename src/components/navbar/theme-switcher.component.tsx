import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');
  const [themeIcon, setThemeIcon] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? faMoon : faSun);

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setThemeIcon(faMoon);
    } else {
      document.documentElement.classList.remove('dark');
      setThemeIcon(faSun);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button type="button" onClick={handleThemeChange} className="bg-background-300 dark:bg-background-600 p-[10px] rounded-full">
      <FontAwesomeIcon icon={themeIcon} />
    </button>
  );
};
