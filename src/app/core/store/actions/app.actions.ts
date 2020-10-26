import { createAction, props } from '@ngrx/store';

import { Users } from 'src/app/core/components/models/users.model';
import { HomePage } from 'src/app/pages/home-page/homePage.model';

import { HomeActions } from 'src/app/shared/enums/actions.enum';

export const getUsers = createAction(HomeActions.GetUsers, props<{ params: any }>());

export const getUsersSuccess = createAction(HomeActions.GetUsersSuccess, props<{ page: HomePage }>());

export const getUsersError = createAction(HomeActions.GetUsersError, props<{ error: Error | string }>());

export const updateUsers = createAction(HomeActions.UpdateUserss);
