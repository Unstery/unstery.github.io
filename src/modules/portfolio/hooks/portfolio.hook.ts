import { useContext } from 'react';

import { PortfolioContext } from '../components';
import {
  findCategories,
  findEducation,
  findExperience,
  findProfile,
  findProjects
} from '../utils/portfolio.utils';

export const usePortfolio = () => {
  const { portfolioRoot } = useContext(PortfolioContext);

  return {
    findProfile: findProfile(portfolioRoot),
    findCategories: findCategories(portfolioRoot),
    findEducation: findEducation(portfolioRoot),
    findExperience: findExperience(portfolioRoot),
    findProjects: findProjects(portfolioRoot),
  };
};
