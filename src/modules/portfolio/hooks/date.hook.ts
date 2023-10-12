import { useTranslation } from 'react-i18next';

import { calculateMonthDiff, formatDate } from '../utils/date.utils';

export const useDate = () => {
  const { i18n } = useTranslation();

  return {
    calculateMonthDiff,
    formatDate: formatDate(i18n),
  };
};
