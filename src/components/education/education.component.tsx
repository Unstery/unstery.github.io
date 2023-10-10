import { usePortfolio } from '../../modules/portfolio';
import { EducationItem } from './education-item.component';

interface EducationProps {
  categoriesRef: React.MutableRefObject<HTMLElement[]>
}

export const Education = ({ categoriesRef }: EducationProps) => {
  const { findEducation } = usePortfolio();

  const education = findEducation();

  return (
    <div
      className="w-full"
      ref={(element) => categoriesRef.current.push(element!)}
    >
      <h2 className="text-primary-200 text-2xl font-bold">{education.title}</h2>
      <div className="flex flex-col gap-4">
        {education.entities.map((entity) => (
          <EducationItem key={entity.degree} entity={entity} />
        ))}
      </div>
    </div>

  );
};
