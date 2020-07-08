import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { fetchApiDataInit, fetchApiDataSuccess, fetchApiDataFailure } from './actions';
import { WeatherDataService } from './weather-data.service';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private weatherDataService: WeatherDataService
  ) {}

  fetchApiData$ = createEffect(() => this.actions$.pipe(
    ofType(fetchApiDataInit),
    mergeMap(() => this.weatherDataService.getForecasts().pipe(
      map(data => fetchApiDataSuccess({data})),
      catchError((error) => of(fetchApiDataFailure({error})))
    ))));
}
