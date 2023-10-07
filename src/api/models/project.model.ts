import { CategoryEnum } from '../enum/category.enum';
import type { ProjectEntity } from './project-entity.models';

export interface Project {
  id: number,
  type: CategoryEnum.PROJECT;
  title: string,
  entities: ProjectEntity[],
}
