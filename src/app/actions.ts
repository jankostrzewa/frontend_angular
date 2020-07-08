import { createAction, props } from '@ngrx/store';
import { WeatherForecast } from './models/weatherForecast';

export const fetchApiDataInit = createAction(
  '[Weather Forecast]Fetch API data initialization'
);

export const fetchApiDataSuccess = createAction(
  '[Weather Forecast]Fetch API data successfull',
  props<{data: WeatherForecast[]}>()
);

export const fetchApiDataFailure = createAction(
  '[Weather Forecast]Fetch API data failure',
  props<{error: any}>()
);
