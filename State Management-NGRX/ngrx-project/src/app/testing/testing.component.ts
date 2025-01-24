import { Component } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { incrementCounter } from '../store/counter.action';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {
  constructor(private store: Store<AppState>) {

  }


  inc() {
    this.store.dispatch(incrementCounter());
  }

}
