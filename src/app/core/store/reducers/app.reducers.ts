import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from 'src/app/core/store/actions/app.actions';
import { initialAppPageState, AppState } from 'src/app/core/store/app.state';

const reducer = createReducer(
  initialAppPageState,
  // Home
  on(AppActions.getUsers, (state) => {
    return { ...state };
  }),

  on(AppActions.getUsersSuccess, (state, { users }) => {
    return {
      ...state,
      users
    };
  })
);

export function AppReducer(state: AppState | undefined, action: Action) {
  return reducer(state, action);
}
