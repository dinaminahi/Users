import { HomePage } from 'src/app/pages/home-page/homePage.model';

export interface AppState {
  home: [HomePage?];
}

export const initialAppPageState: AppState = {
  home: []
};
