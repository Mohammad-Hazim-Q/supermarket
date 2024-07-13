import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  httpLoader$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  rightDrawer$: Subject<{ [key: string]: any } | undefined> = new Subject()

  basketItemsCount$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }


  toggleLoader(status: boolean) {
    this.httpLoader$.next(status)
  }

  toggleRightDrawer(payload?: { [key: string]: any }) {
    this.rightDrawer$.next(payload)
  }

  updateBasketCount(count: number) {
    this.basketItemsCount$.next(count);
  }
}
