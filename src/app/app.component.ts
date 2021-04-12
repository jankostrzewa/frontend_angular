import { Component } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { WeatherForecast } from './models/weatherForecast';
import { WeatherDataService } from './weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  data$: Observable<WeatherForecast> = EMPTY;
  constructor(private weatherDataService: WeatherDataService) { }

  fetchApiData() {
    this.data$ = this.weatherDataService.getForecasts();
  }
}
