import { LanguageDropdown } from './language-dropdown.component';
import { usePortfolio } from '../../modules/portfolio';
import { ThemeSwitcher } from './theme-switcher.component';
import { CategoryEnum } from '../../api/enum/category.enum';

interface NavbarProps {
  categoriesRef: React.MutableRefObject<HTMLElement[]>,
  activeCategory: string | undefined;
  setActiveCategory: (activeCategory: string) => void;
}

export const Navbar = ({ categoriesRef, activeCategory, setActiveCategory }: NavbarProps) => {
  const { findCategories } = usePortfolio();

  const categories = findCategories();

  const handleScroll = (i: number) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const { href } = e.currentTarget;
    const targetId = href.replace(/.*#/, '');
    setActiveCategory(targetId);

    const navbarHeight = document.querySelector('.navbar')?.clientHeight || 0;
    const targetPosition = categoriesRef.current[i].offsetTop - navbarHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

  return (
    <div className="navbar sticky top-0 w-full flex flex-row justify-between items-center px-8 py-5 bg-background-200 dark:bg-background-700">
      <div className="flex flex-row justify-start items-center gap-8 text-xl">
        {categories.map((category, i) => (
          <a
            href={`#${category.title}`}
            key={category.id}
            onClick={handleScroll(i)}
            className={`${category.title === CategoryEnum.PROFILE ? 'text-2xl font-bold' : null} ${category.title === activeCategory ? 'text-primary-200' : null}`}
          >
            {category.title}
          </a>
        ))}
      </div>
      <div className="flex flex-row items-center gap-4">
        <ThemeSwitcher />
        <LanguageDropdown />
      </div>
    </div>
  );
};
