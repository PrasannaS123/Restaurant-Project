import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  private selectedUserDataSubject = new BehaviorSubject<any>(null);
  selectedUserData$ = this.selectedUserDataSubject.asObservable();

  setSelectedUserData(userData: any) {
    this.selectedUserDataSubject.next(userData);
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
