import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  private loggedIn = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedId().subscribe((loggedId: boolean) => {
      this.loggedIn = loggedId;
    });
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.loggedIn) {
      this.router.navigateByUrl('/login');
    }
    return this.loggedIn;
  }
}
