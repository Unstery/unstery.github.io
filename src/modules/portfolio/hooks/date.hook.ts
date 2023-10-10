import { useTranslation } from 'react-i18next';
import { calculateMonthDiff, formatDate, generateDate } from '../utils/date.utils';

export const useDate = () => {
  const { i18n, t } = useTranslation();

  return {
    calculateMonthDiff,
    formatDate: formatDate(i18n),
    generateDate: generateDate(i18n, t)
  };
};
