import { HomeActions } from 'src/app/shared/enums/actions.enum';

import * as Actions from './app.actions';

describe('create Get users action', () => {
  it('should return an action', () => {
    expect(Actions.getUsers({ params: 1 }).type).toBe(HomeActions.GetUsers);
  });
});
