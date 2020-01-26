import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from './models/weatherForecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  url = `http://localhost:8000/api`;

  constructor(private httpClient: HttpClient) { }

  getForecasts() {
    return this.httpClient.get<WeatherForecast>(`${this.url}/weatherforecast`);
  }
}
