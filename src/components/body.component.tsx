import { useEffect } from 'react';

import { Education } from './education';
import { Experience } from './experience';
import { Profile } from './profile';
import { Projects } from './projects';

interface BodyProps {
  categoriesRef: React.MutableRefObject<HTMLElement[]>,
  setActiveCategory: (activeCategory: string | undefined) => void;
}

export const Body = ({ categoriesRef, setActiveCategory }: BodyProps) => {
  useEffect(() => {
    const activeCategories = new Map<string, boolean>();
    categoriesRef.current.forEach((categoryRef) => {
      activeCategories.set(categoryRef.id, false);
    });

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      activeCategories.set(entry.target.id, entry.isIntersecting);

      const activeCategory = Array.from(activeCategories.entries())
        .reverse()
        .find(([, value]) => !!value)?.[0];

      setActiveCategory(activeCategory);
    });

    categoriesRef.current.forEach((categoryRef) => {
      observer.observe(categoryRef);
    });
  }, [setActiveCategory]);

  return (
    <div className="p-6 mx-auto max-w-screen-lg flex flex-col gap-5 justify-center items-center">
      <Profile categoriesRef={categoriesRef} />
      <Experience categoriesRef={categoriesRef} />
      <Projects categoriesRef={categoriesRef} />
      <Education categoriesRef={categoriesRef} />
    </div>
  );
};
