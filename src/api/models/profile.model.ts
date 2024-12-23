import { CategoryEnum } from '../enum/category.enum';

export interface Profile {
  id: string,
  type: CategoryEnum.PROFILE;
  title: string,
  firstName: string,
  lastName: string,
  welcome: string,
  status: string,
  formation: string,
  tags: string[],
  description: string,
}
