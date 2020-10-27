import { createAction, props } from '@ngrx/store';
import { HomeActions } from 'src/app/shared/enums/actions.enum';
import { Users } from 'src/app/shared/models/users.model';

export const getUsers = createAction(HomeActions.GetUsers, props<{ params: string }>());

export const getUsersSuccess = createAction(HomeActions.GetUsersSuccess, props<{ users: Users }>());

export const getUsersError = createAction(HomeActions.GetUsersError, props<{ error: Error | string }>());

export const updateUsers = createAction(HomeActions.UpdateUserss);
