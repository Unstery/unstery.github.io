import { usePortfolio } from '../../modules/portfolio';
import { ExperienceItem } from './experience-item.component';

interface ExperienceProps {
  categoriesRef: React.MutableRefObject<HTMLElement[]>
}

export const Experience = ({ categoriesRef }: ExperienceProps) => {
  const { findExperience } = usePortfolio();

  const experience = findExperience();

  return (
    <section
      className="w-full"
      ref={(element) => categoriesRef.current.push(element!)}
      id={experience.title}
    >
      <h2 className="text-primary-200 text-2xl font-bold">{experience.title}</h2>
      <div className="flex flex-col gap-4">
        {experience.entities.map((entity) => (
          <ExperienceItem key={entity.company} entity={entity} />
        ))}
      </div>
    </section>

  );
};
