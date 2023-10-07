import { ExperienceEntity } from '../../api/models';

interface ExperienceItemProps {
  entity: ExperienceEntity
}

export const ExperienceItem = ({ entity }: ExperienceItemProps) => (
  <div className="p-4 flex flex-col gap-1 rounded-lg bg-background-300 dark:bg-background-600">
    <h3 className="text-text-700 dark:text-text-200 font-semibold">{entity.title}</h3>
    <h4 className="text-text-700 dark:text-text-200">{entity.company}</h4>
    <p className="text-text-700 dark:text-text-200">{entity.description}</p>
  </div>
);
