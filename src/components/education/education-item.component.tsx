import { EducationEntity } from '../../api/models';
import { useDate } from '../../modules/portfolio';

interface EducationItemProps {
  entity: EducationEntity
}

const getEducationDate = (
  startDateString: Date,
  endDateString: Date,
  formatDate: (date: Date, options: Intl.DateTimeFormatOptions) => string,
) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric' };
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const startFormattedDate = formatDate(startDate, options);
  const endFormattedate = formatDate(endDate, options);

  return `${startFormattedDate}/${endFormattedate}`;
};

export const EducationItem = ({ entity }: EducationItemProps) => {
  const { formatDate } = useDate();

  const date = getEducationDate(
    entity.startDate,
    entity.endDate,
    formatDate,
  );

  return (
    <div className="p-4 flex flex-col gap-4 rounded-2xl bg-background-300 dark:bg-background-600">
      <div className="flex flex-row gap-3 items-center">
        <img src={`education/${entity.image}`} alt={entity.image} className="h-28 w-28 object-contain rounded-2xl" />
        <div>
          <h3 className="text-xl font-bold">{entity.degree}</h3>
          <p className="text-primary-200 font-semibold">{entity.school}</p>
          <p>{entity.speciality}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
