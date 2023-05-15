import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Toast {
  message: string;
  type: 'success' | 'error'
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _toasts$: BehaviorSubject<Toast[]> = new BehaviorSubject<Toast[]>([]);

  constructor() {}

  get toasts$(): Observable<Toast[]> {
    return this._toasts$.asObservable();
  }

  showToast(toast: Toast): void {
    const currentToasts = this._toasts$.getValue();
    this._toasts$.next([...currentToasts, toast]);

    setTimeout(() => {
      this.removeToast(toast);
    }, 3000);
  }

  removeToast(toast: Toast): void {
    const currentToasts = this._toasts$.getValue();
    this._toasts$.next(currentToasts.filter((t) => t !== toast));
  }
}
