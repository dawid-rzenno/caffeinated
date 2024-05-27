import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private notifications$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

  sendNotification(notification: string): void {
    this.notifications$.next(notification);
  }

  clearNotifications(): void {
    this.notifications$.next(undefined);
  }

  getNotification$(): Observable<string | undefined> {
    return this.notifications$.asObservable();
  }

  getNotification(): string | undefined {
    return this.notifications$.getValue();
  }
}
