import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from './models/weatherForecast';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  url = `http://localhost:8000/api`;

  constructor(private httpClient: HttpClient) { }

  getForecasts() {
    return of(this.getMockData());
    //return this.httpClient.get<WeatherForecast>(`${this.url}/weatherforecast`);
  }

  private getMockData(): WeatherForecast {
    return {
      datetime: new Date(),
      location: 'London',
      temperature: Math.random() * 30
    }
  }
}
