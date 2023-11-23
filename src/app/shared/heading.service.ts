import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeadingService {


  private readonly STORAGE_KEY = 'pageTitle';
  private pageTitleSource = new BehaviorSubject<string>('Dashboard');
  pageTitle$ = this.pageTitleSource.asObservable();


  constructor() {
    const storedTitle = localStorage.getItem(this.STORAGE_KEY);
    if (storedTitle) {
      this.pageTitleSource.next(storedTitle);
    }
  }


  setPageTitle(title: string) {
    this.pageTitleSource.next(title);
    localStorage.setItem(this.STORAGE_KEY, title);
  }

 
  private showAddUserBreadcrumbSubject = new BehaviorSubject<boolean>(false);
  private showEditUserBreadcrumbSubject = new BehaviorSubject<boolean>(false);
  private showViewUserBreadcrumbSubject = new BehaviorSubject<boolean>(false);
  private showChangePasswordBreadcrumbSubject = new BehaviorSubject<boolean>(false);


  setShowAddUserBreadcrumb(value: boolean) {
    this.showAddUserBreadcrumbSubject.next(value);
  }

  getShowAddUserBreadcrumb(): Observable<boolean> {
    return this.showAddUserBreadcrumbSubject.asObservable();
  }

  setShowEditUserBreadcrumb(value: boolean) {
    this.showEditUserBreadcrumbSubject.next(value);
  }

  getShowEditUserBreadcrumb(): Observable<boolean> {
    return this.showEditUserBreadcrumbSubject.asObservable();
  }

  setShowViewUserBreadcrumb(value: boolean) {
    this.showViewUserBreadcrumbSubject.next(value);
  }

  getShowViewUserBreadcrumb(): Observable<boolean> {
    return this.showViewUserBreadcrumbSubject.asObservable();
  }

  setPasswordUserBreadcrumb(value: boolean) {
    this.showChangePasswordBreadcrumbSubject.next(value);
  }

  getPasswordBreadcrumb(): Observable<boolean> {
    return this.showChangePasswordBreadcrumbSubject.asObservable();
  }

}
