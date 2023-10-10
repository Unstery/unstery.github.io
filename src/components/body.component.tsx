import { Education } from './education';
import { Experience } from './experience';
import { Profile } from './profile';
import { Projects } from './projects';

interface BodyProps {
  categoriesRef: React.MutableRefObject<HTMLElement[]>
}

export const Body = ({ categoriesRef }: BodyProps) => (
  <div className="p-6 mx-auto max-w-screen-lg flex flex-col gap-5 justify-center items-center">
    <Profile categoriesRef={categoriesRef} />
    <Education categoriesRef={categoriesRef} />
    <Experience categoriesRef={categoriesRef} />
    <Projects categoriesRef={categoriesRef} />
  </div>
);
