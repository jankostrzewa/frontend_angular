import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { WeatherForecast } from './models/weatherForecast';
import { createReducer, Action, on, State } from '@ngrx/store';
import { fetchApiDataSuccess, fetchApiDataInit, fetchApiDataFailure } from './actions';

export interface WeatherForecastsState extends EntityState<WeatherForecast> {
  selectedWeatherForecast: number | null;
  loading: boolean;
}

const adapter: EntityAdapter<WeatherForecast> = createEntityAdapter<WeatherForecast>({
  selectId: selectUserId
});

function selectUserId(a: WeatherForecast): string {
  return a.id;
}

export const initialState: WeatherForecastsState = adapter.getInitialState({
  selectedWeatherForecast: null,
  loading: false
});

export function reducer(state: WeatherForecastsState | undefined, action: Action) {
  return weatherForecastsReducer(state, action);
}

const weatherForecastsReducer = createReducer(
  initialState,
  on(fetchApiDataInit, (state) => ({...state, loading: true})),
  on(fetchApiDataSuccess, (state, action) => adapter.upsertMany(action.data, {...state, loading: false})),
  on(fetchApiDataFailure, (state, action) => ({...state, loading: false})),
  );
