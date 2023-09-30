import { Navbar } from './navbar/navbar.component';

import { i18nInit } from '../translations/i18n';
import en from '../translations/en.json';
import fr from '../translations/fr.json';

const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  }
};

i18nInit({ resources });

export const PortfolioPage = () => (
  <div>
    <Navbar />
  </div>

);
