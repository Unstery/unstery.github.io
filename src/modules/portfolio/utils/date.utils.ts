import {
  EducationEntity,
  ExperienceEntity,
  ProjectEntity
} from '../../../api/models';

export const calculateMonthDiff = (startDate: Date, endDate: Date) => {
  let months;
  months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  months -= startDate.getMonth();
  months += endDate.getMonth();
  return months <= 0 ? 0 : months;
};

export const formatDate = (i18n: any) => (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Intl.DateTimeFormat(i18n.language, options).format(date);
};

export const generateDate = (
  i18n: any,
  t: any
) => (
  entity: ExperienceEntity | EducationEntity | ProjectEntity
) => {
  const startDate = new Date(entity.startDate);
  const endDate = new Date(entity.endDate);
  const monthsDiff = calculateMonthDiff(startDate, endDate);

  return `${formatDate(i18n)(startDate)} - ${formatDate(i18n)(endDate)} (${t('month', { count: monthsDiff })})`;
};
