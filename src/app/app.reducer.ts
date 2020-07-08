import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../environments/environment';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import * as WeatherForecasts from './weatherforecasts.reducer';

export interface AppState {
  router: RouterReducerState<any>;
  weatherForecast: WeatherForecasts.WeatherForecastsState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  weatherForecast: WeatherForecasts.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
