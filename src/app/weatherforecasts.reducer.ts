import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { WeatherForecast } from './models/weatherForecast';
import { createReducer, Action } from '@ngrx/store';

export interface WeatherForecastsState extends EntityState<WeatherForecast> {
  selectedWeatherForecast: number | null;
}

function selectUserId(a: WeatherForecast): string {
  return a.id;
}

const adapter: EntityAdapter<WeatherForecast> = createEntityAdapter<WeatherForecast>({
  selectId: selectUserId
});

export const initialState: WeatherForecastsState = adapter.getInitialState({
  selectedWeatherForecast: null
});

const userReducer = createReducer(initialState);

export function reducer(state: WeatherForecastsState | undefined, action: Action) {
  return userReducer(state, action);
}
