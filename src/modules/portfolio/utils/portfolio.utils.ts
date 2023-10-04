import type { PortfolioRoot } from '../../../api/models';

export const findProfile = (
  portfolioRoot: PortfolioRoot
) => () => portfolioRoot.profile;

export const findCategories = (
  portfolioRoot: PortfolioRoot
) => () => portfolioRoot.categories;

export const findEducation = (
  portfolioRoot: PortfolioRoot
) => () => portfolioRoot.categories;

export const findExperience = (
  portfolioRoot: PortfolioRoot
) => () => portfolioRoot.categories;

export const findProjects = (
  portfolioRoot: PortfolioRoot
) => () => portfolioRoot.categories;
