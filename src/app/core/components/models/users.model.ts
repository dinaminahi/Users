import { UserItem } from 'src/app/pages/home-page/components/users/users.model';

export interface Users {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data?: UserItem[];
  ad?: object;
}
