import { I18nextProvider, useTranslation } from 'react-i18next';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Navbar } from './navbar';
import { i18nInit } from '../translations/i18n';
import en from '../translations/en.json';
import fr from '../translations/fr.json';
import { PortfolioProvider } from '../modules/portfolio';
import { Profile } from './profile';
import { Education } from './education';
import { Experience } from './experience';
import { Projects } from './projects';

const resources = {
  en: {
    translation: en
  },
  fr: {
    translation: fr
  }
};

i18nInit({ resources });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0
    },
  },
});

export const PortfolioPage = () => {
  const { i18n } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <PortfolioProvider>
          <Navbar />
          <div className="m-6 flex flex-col gap-3">
            <Profile />
            <Education />
            <Experience />
            <Projects />
          </div>
        </PortfolioProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
};
