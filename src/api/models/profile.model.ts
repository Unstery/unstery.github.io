import { CategoryEnum } from '../enum/category.enum';

export interface Profile {
  id: string,
  type: CategoryEnum.PROFILE;
  firstName: string,
  lastName: string,
  title: string,
  status: string,
  description: string,
}
