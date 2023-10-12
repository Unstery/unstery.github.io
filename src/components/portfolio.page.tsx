import { useRef, useState } from 'react';

import { Navbar } from './navbar';
import { usePortfolio } from '../modules/portfolio';
import { Body } from './body.component';

export const PortfolioPage = () => {
  const { findProfile } = usePortfolio();
  const profile = findProfile();

  const categoriesRef = useRef<HTMLElement[]>([]);

  const [activeCategory, setActiveCategory] = useState<string | undefined>(profile.title);

  return (
    <div>
      <Navbar
        categoriesRef={categoriesRef}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <Body categoriesRef={categoriesRef} setActiveCategory={setActiveCategory} />
    </div>
  );
};
