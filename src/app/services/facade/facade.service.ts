import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { selectHome } from 'src/app/core/store//selectors/app.selectors';

import { HomeActions } from 'src/app/shared/enums/actions.enum';

import { HomePage } from 'src/app/pages/home-page/homePage.model';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {
  constructor(private store: Store<AppState>) {}

  public getHome(params: { page: string }): void {
    this.store.dispatch({ params, type: HomeActions.GetUsers });
  }

  public getHomeAll(): Observable<HomePage> {
    return this.store.select(selectHome);
  }
}
