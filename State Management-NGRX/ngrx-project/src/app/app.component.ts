import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { selectCount, selecteCounterState } from './store/counter.selector';
import { decrementCounter, incrementCounter } from './store/counter.action';
import { AsyncPipe } from '@angular/common';
import { TestingComponent } from './testing/testing.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, TestingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-project';
  counter$: Observable<number> = new Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter$ = store.select(selectCount);
  }

  increment() {
    this.store.dispatch(incrementCounter());
  }

  decrement() {
    this.store.dispatch(decrementCounter());
  }
}
