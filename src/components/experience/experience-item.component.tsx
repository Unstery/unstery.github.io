import { ExperienceEntity } from '../../api/models';
import { useDate } from '../../modules/portfolio';

interface ExperienceItemProps {
  entity: ExperienceEntity
}

const getExperienceDate = (
  startDateString: Date,
  endDateString: Date,
  formatDate: (date: Date, options: Intl.DateTimeFormatOptions) => string,
) => {
  const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const startFormattedDate = formatDate(startDate, options);
  const endFormattedate = formatDate(endDate, options);

  return `${startFormattedDate} / ${endFormattedate}`;
};

export const ExperienceItem = ({ entity }: ExperienceItemProps) => {
  const { formatDate } = useDate();

  const date = getExperienceDate(
    entity.startDate,
    entity.endDate,
    formatDate,
  );

  return (
    <div className="p-4 flex flex-col gap-4 rounded-2xl bg-background-300 dark:bg-background-600">
      <div className="flex flex-row gap-3 items-center">
        <img src={`/portfolio/experience/${entity.image}`} alt={entity.image} className="h-28 rounded-2xl" />
        <div>
          <h3 className="text-xl font-bold">{entity.title}</h3>
          <p className="text-primary-200 font-semibold">{entity.company}</p>
          <p>{entity.location}</p>
          <p>{date}</p>
        </div>
      </div>
      <p>{entity.description}</p>
      <div className="flex flex-wrap gap-2">
        {entity.skills.map((skill) => (
          <p key={skill} className="py-1 px-3 rounded-2xl text-sm bg-primary-200 text-text-200">{skill}</p>
        ))}
      </div>
    </div>
  );
};
