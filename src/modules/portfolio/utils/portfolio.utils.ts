import { CategoryEnum } from '../../../api/enum/category.enum';
import {
  Education, Experience, PortfolioRoot, Project
} from '../../../api/models';

export const findProfile = (
  portfolioRoot: PortfolioRoot
) => () => portfolioRoot.profile;

export const findCategories = (
  portfolioRoot: PortfolioRoot
) => () => portfolioRoot.categories;

export const findEducation = (
  portfolioRoot: PortfolioRoot
) => () => portfolioRoot.categories
  .find((category) => category.type === CategoryEnum.EDUCATION) as Education;

export const findExperience = (
  portfolioRoot: PortfolioRoot
) => () => portfolioRoot.categories
  .find((category) => category.type === CategoryEnum.EXPERIENCE) as Experience;

export const findProjects = (
  portfolioRoot: PortfolioRoot
) => () => portfolioRoot.categories
  .find((category) => category.type === CategoryEnum.PROJECT) as Project;
