import type { CategoryType } from '../types/categories.type';

export interface PortfolioRoot {
  id: number,
  title: string,
  categories: CategoryType[]
}
