import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface UserData {
  username: string;
  firstName: string;
  email: string;
  password: string;
  age: number;
  interests: string[];
  addressType: string;
  address1: string;
  address2: string;
  photo: string | ArrayBuffer | null;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDataSubject: BehaviorSubject<UserData | null> = new BehaviorSubject<UserData | null>(null);

  constructor() {
    const storedUserData = sessionStorage.getItem('userData');
    if (storedUserData) {
      this.userDataSubject.next(JSON.parse(storedUserData));
    }
  }

  getUserData(): Observable<UserData | null> {
    return this.userDataSubject.asObservable();
  }

  setUserData(userData: UserData): void {
    sessionStorage.setItem('userData', JSON.stringify(userData));
    this.userDataSubject.next(userData);
  }

  clearUserData(): void {
    sessionStorage.removeItem('userData');
    this.userDataSubject.next(null);
  }
}