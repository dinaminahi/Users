import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { EMPTY } from 'rxjs';
import { map, take, mergeMap, catchError } from 'rxjs/operators';

import * as AppActions from 'src/app/core/store/actions/app.actions';

@Injectable({
  providedIn: 'root'
})
export class AppEffects {
  constructor(private http: HttpClient, private actions$: Actions) {}

  public getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.getUsers),
      mergeMap((action) =>
        this.http
          .get<any>(`https://reqres.in/api/users`, { params: { page: action.params } })
          .pipe(
            map((users) => AppActions.getUsersSuccess({ users })),
            take(1),
            catchError(() => EMPTY)
          )
      )
    )
  );
}
