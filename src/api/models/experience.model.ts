import type { ExperienceEntity } from './experience-entity.model';

export interface Experience {
  id: number,
  title: string,
  entities: ExperienceEntity[],
}
