import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';
import { Store } from '@ngrx/store';
import { counterSelector } from './state/counter/counter.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx-practice';

  count$: Observable<number>;

  constructor(private store : Store<AppState>) {
   this.count$ = this.store.select(counterSelector)
  }
}
