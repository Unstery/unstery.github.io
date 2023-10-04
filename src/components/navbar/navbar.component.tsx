import { LanguageDropdown } from './language-dropdown.component';
import { usePortfolio } from '../../modules/portfolio';

export const Navbar = () => {
  const { findCategories } = usePortfolio();

  const categories = findCategories();

  return (
    <div className="flex flex-row justify-around px-[20px] py-[25px] bg-background-500">
      {categories.map((category) => (
        <p key={category.id}>{category.title}</p>
      ))}
      <LanguageDropdown />
    </div>
  );
};
