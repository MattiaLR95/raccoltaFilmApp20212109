import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from './../../model/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private userLoggedSubject$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  login(loginForm : User): Observable<User>{
    return of({username: loginForm.username, token: "123456"});
    //return this.http.post<User>("login", JSON.stringify(loginForm));
  }

  setUserLogged(user : User | null){
    this.userLoggedSubject$.next(user);
  }

  getUserLogged(): Observable<User | null>{
    return this.userLoggedSubject$.asObservable();
  }

  isLoggedIn(): boolean {
    return this.userLoggedSubject$.value ? !!this.userLoggedSubject$.value.token : false;
  }

  getUserToken(): string | null{
    return this.userLoggedSubject$.value ? this.userLoggedSubject$.value.token : null;
  }

  logout() {
    this.setUserLogged(null);
  }

}
