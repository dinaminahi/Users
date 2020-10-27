import { Users } from 'src/app/shared/models/users.model';

export interface AppState {
  users: Users;
}

export const initialAppPageState: AppState = {
  users: null
};
