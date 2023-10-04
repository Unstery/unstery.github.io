import type { EducationEntity } from './education-entity.model';

export interface Education {
  id: number,
  title: string,
  entities: EducationEntity[],
}
