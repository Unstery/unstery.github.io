import { usePortfolio } from '../../modules/portfolio';
import { ExperienceItem } from './experience-item.component';

export const Experience = () => {
  const { findExperience } = usePortfolio();

  const experience = findExperience();

  return (
    <div>
      <h2 className="text-primary-200 text-2xl font-bold">{experience.title}</h2>
      <div className="flex flex-col gap-4">
        {experience.entities.map((entity) => (
          <ExperienceItem key={entity.company} entity={entity} />
        ))}
      </div>
    </div>

  );
};
