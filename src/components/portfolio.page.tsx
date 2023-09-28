import { useTranslation } from 'react-i18next';

export const PortfolioPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('title')}</p>
    </div>
  );
};
