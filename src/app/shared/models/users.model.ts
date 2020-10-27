import { UserItem } from 'src/app/shared/models/userItem.model';

export interface Users {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserItem[];
  ad: object;
}
