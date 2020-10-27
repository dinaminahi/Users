import { createSelector } from '@ngrx/store';

import { AppState } from '../app.state';

export const selectState = (store) => store.state;

export const selectHome = createSelector(selectState, (state: AppState) => state.users);
