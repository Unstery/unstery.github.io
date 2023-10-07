import { LanguageDropdown } from './language-dropdown.component';
import { usePortfolio } from '../../modules/portfolio';
import { ThemeSwitcher } from './theme-switcher.component';

export const Navbar = () => {
  const { findCategories } = usePortfolio();

  const categories = findCategories();

  return (
    <div className="flex flex-row justify-between items-center px-8 py-5 bg-background-200 dark:bg-background-700">
      <div className="flex flex-row justify-start gap-8">
        {categories.map((category) => (
          <p key={category.id} className="text-text-700 dark:text-text-200">{category.title}</p>
        ))}
      </div>
      <ThemeSwitcher />
      <LanguageDropdown />
    </div>
  );
};
