import type { CategoryType } from '../types/categories.type';

export interface PortfolioRoot {
  id: string,
  title: string,
  categories: CategoryType[]
}
