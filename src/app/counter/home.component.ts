import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { counterSelector } from '../store/counter/counter.selector';
import { Store } from '@ngrx/store';
import * as CounterActions from "../store/counter/counter.action";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 count$: Observable<number>;

 constructor(private store: Store<AppState>) {
  this.count$ = this.store.select(counterSelector)
 }

 stateChange(state:string) {
  let callBackMethod:any;
  if(state == 'increment'){
    callBackMethod = CounterActions.increment();
  } else if(state == 'decrement'){
    callBackMethod = CounterActions.decrement();
  } else {
    callBackMethod = CounterActions.reset();
  }

  this.store.dispatch(callBackMethod);
 }

}
