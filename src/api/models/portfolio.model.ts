import type { CategoryType } from '../types/categories.type';
import type { Profile } from './profile.model';

export interface PortfolioRoot {
  id: number,
  title: string,
  profile: Profile,
  categories: CategoryType[]
}
