import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  httpLoader$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  rightDrawer$: Subject<{ [key: string]: any } | undefined> = new Subject()

  // notificationsCount$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }


  toggleLoader(status: boolean) {
    this.httpLoader$.next(status)
  }

  toggleRightDrawer(payload?: { [key: string]: any }) {
    this.rightDrawer$.next(payload)
  }
}
