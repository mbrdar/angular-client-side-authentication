import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from './model/user';
import {Http} from '@angular/http';

@Injectable()
export class AuthService {

  private loggedId$ = new BehaviorSubject<boolean>(this.getToken() !== null ? true : false);

  // Implementation of Http service comes from mock-backend module,
  // in production use real Http service from Angular HttpModule
  constructor(private http: Http, @Inject('AUTH_TOKEN') private authToken: string,
              @Inject('AUTH_USER') private authUser: string) {
  }

  login(email: string, password: string): void {
    this.http.post('http://your-app-url.com/login', {email: email, password: password})
      .subscribe((response: any) => {
        localStorage.setItem(this.authUser, response.text());
        localStorage.setItem(this.authToken, response.headers.get('Set-Authorization'));
        this.loggedId$.next(true);
      }, () => {
        this.loggedId$.next(false);
      });
  }

  getUser(): User {
    return new User(JSON.parse(localStorage.getItem(this.authUser)));
  }

  getToken(): string {
    return localStorage.getItem(this.authToken);
  }

  isLoggedId(): BehaviorSubject<boolean> {
    return this.loggedId$;
  }

  logout(): void {
    localStorage.removeItem(this.authToken);
    localStorage.removeItem(this.authUser);
    this.loggedId$.next(false);
  }
}
