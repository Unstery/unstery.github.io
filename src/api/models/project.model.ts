import type { ProjectEntity } from './project-entity.models';

export interface Project {
  id: number,
  title: string,
  entities: ProjectEntity[],
}
