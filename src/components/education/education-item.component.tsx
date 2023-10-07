import { EducationEntity } from '../../api/models';

interface EducationItemProps {
  entity: EducationEntity
}

export const EducationItem = ({ entity }: EducationItemProps) => (
  <div className="p-4 flex flex-col gap-1 rounded-lg bg-background-300 dark:bg-background-600">
    <h3 className="text-text-700 dark:text-text-200">{entity.school}</h3>
  </div>
);
