import { LanguageDropdown } from './language-dropdown.component';
import { ThemeSwitcher } from './theme-switcher.component';

export const Options = () => (
  <div className="flex flex-row items-center gap-2">
    <a href="https://www.linkedin.com/in/bastienfaisant/" target="_blank" rel="noreferrer" className="w-10 h-10 flex justify-center items-center rounded-2xl bg-background-300 dark:bg-background-600 text-text-700 dark:text-text-200 p-[10px]">
      <img src="/linkedin.svg" alt="LinkedIn" className="h-7 w-7" />
    </a>
    <a href="mailto:fst09bastien@gmail.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex justify-center items-center rounded-2xl bg-background-300 dark:bg-background-600 text-text-700 dark:text-text-200 p-[10px]">
      <img src="/gmail.svg" alt="Gmail" className="h-7 w-7" />
    </a>
    <ThemeSwitcher />
    <LanguageDropdown />
  </div>
);
