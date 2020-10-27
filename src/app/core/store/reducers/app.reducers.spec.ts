import { initialAppPageState, AppState } from 'src/app/core/store/app.state';
import * as AppActions from 'src/app/core/store/actions/app.actions';

import { AppReducer } from './app.reducers';

describe('App Reducer', () => {
  let state: AppState;
  beforeEach(() => {
    state = initialAppPageState;
  });

  describe('valid app actions for Home', () => {
    it('getUsers() should return state', () => {
      const params = {
        params: {
          page: 1
        }
      };
      const action = AppActions.getUsers(params);
      const result = AppReducer(state, action);
      expect(result).toEqual(initialAppPageState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = AppReducer(initialAppPageState, action);
      expect(result).toEqual(initialAppPageState);
    });
  });
});
