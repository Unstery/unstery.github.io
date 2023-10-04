import { LanguagesEnum } from '../../enums/languages.enum';
import i18n from '../../translations/i18n';
import portfolioDataEn from '../data/portfolio-data-en.json';
import portfolioDataFr from '../data/portfolio-data-fr.json';
import type { PortfolioRoot } from '../models';

export const portfolioService = {
  fetchPortfolio: async () => Promise.resolve({
    status: 200,
    data: i18n.language === LanguagesEnum.FR ? portfolioDataFr : portfolioDataEn,
    success: true,
    errors: [],
  }).then((res) => (res.data) as PortfolioRoot)
};
