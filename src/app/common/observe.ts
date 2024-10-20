import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObserveData {
  constructor() { }
  theme = new BehaviorSubject<'dark' | 'light'>('light');

  getTheme(): Observable<'dark' | 'light'> {
    return this.theme.asObservable();
  }
  setTheme(theme: 'dark' | 'light'): void {
    this.theme.next(theme);
  }
}
