import { CategoryEnum } from '../enum/category.enum';
import type { EducationEntity } from './education-entity.model';

export interface Education {
  id: number,
  type: CategoryEnum.EDUCATION;
  title: string,
  entities: EducationEntity[],
}
