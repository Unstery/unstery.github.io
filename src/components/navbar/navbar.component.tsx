import { LanguageDropdown } from './language-dropdown.component';
import { usePortfolio } from '../../modules/portfolio';
import { ThemeSwitcher } from './theme-switcher.component';

interface NavbarProps {
  categoriesRef: React.MutableRefObject<HTMLElement[]>
}

export const Navbar = ({ categoriesRef }: NavbarProps) => {
  const { findCategories, findProfile } = usePortfolio();

  const categories = findCategories();
  const profile = findProfile();

  const fullName = `${profile.firstName} ${profile.lastName}`;

  const handleScroll = (i: number) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const navbarHeight = document.querySelector('.navbar')?.clientHeight || 0;
    const targetPosition = categoriesRef.current[i].offsetTop - navbarHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

  return (
    <div className="navbar sticky top-0 w-full flex flex-row justify-between items-center px-8 py-5 bg-background-200 dark:bg-background-700">
      <div className="flex flex-row justify-start gap-8">
        <button type="button" onClick={handleScroll(0)}>{fullName}</button>
        {categories.map((category, i) => (
          <button type="button" key={category.id} onClick={handleScroll(i + 1)}>{category.title}</button>
        ))}
      </div>
      <div className="flex flex-row items-center gap-4">
        <ThemeSwitcher />
        <LanguageDropdown />
      </div>
    </div>
  );
};
