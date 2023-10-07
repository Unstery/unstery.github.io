import { usePortfolio } from '../../modules/portfolio';
import { EducationItem } from './education-item.component';

export const Education = () => {
  const { findEducation } = usePortfolio();

  const education = findEducation();

  return (
    <div>
      <h2 className="text-primary-200 text-2xl">{education.title}</h2>
      <div className="flex flex-col gap-4">
        {education.entities.map((entity) => (
          <EducationItem key={entity.degree} entity={entity} />
        ))}
      </div>
    </div>

  );
};
