import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import { fetchApiDataInit } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private store$: Store<AppState>) {
  }

  fetchApiData() {
    this.store$.dispatch(fetchApiDataInit());
  }

}
