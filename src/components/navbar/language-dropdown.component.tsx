import { useTranslation } from 'react-i18next';

import { type ChangeEvent } from 'react';
import { LanguagesEnum } from '../../enums/languages.enum';

export const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  const languages: LanguagesEnum[] = [
    LanguagesEnum.FR,
    LanguagesEnum.EN
  ];

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <div className="bg-background-700 p-[10px] rounded-full">
      <select onChange={handleLanguageChange} value={i18n.language} className="bg-background-700">
        {
            languages.map((langCode) => (
              <option key={langCode} value={langCode}>
                {langCode.toUpperCase()}
              </option>
            ))
        }
      </select>
    </div>
  );
};
