import { useTranslation } from 'react-i18next';

import { LanguageDropdown } from './language-dropdown.component';

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row justify-around px-[20px] py-[25px] bg-background-500">
      <p>{t('category.education')}</p>
      <p>{t('category.experience')}</p>
      <p>{t('category.projects')}</p>
      <LanguageDropdown />
    </div>
  );
};
