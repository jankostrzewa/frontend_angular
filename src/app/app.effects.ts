import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMapTo, map, catchError, mergeMap } from 'rxjs/operators';
import { fetchApiDataInit, fetchApiDataSuccess, fetchApiDataFailure } from './actions';
import { WeatherDataService } from './weather-data.service';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions,
    private weatherDataService: WeatherDataService) {}

  fetchApiData$ = createEffect(
    () => this.actions$.pipe(
      ofType(fetchApiDataInit.type),
      mergeMap(
        () => this.weatherDataService.getForecasts().pipe(
          map(data => fetchApiDataSuccess({data})),
          // catchError(error => fetchApiDataFailure({error}))
        )
      )
    )
  );
}
