import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AuthService} from './auth.service';
import {FormsModule} from '@angular/forms';
import {LogoutComponent} from './logout/logout.component';
import {HttpModule} from '@angular/http';
import {HttpService} from './http.service';
import {AuthRoutingModule} from './auth.routing';
import {LoggedInGuard} from './logged-in.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpModule
  ],
  declarations: [LoginComponent, LogoutComponent],
  providers: [
    AuthService,
    // This is mock http service in real implementation use HttpService from @angular/http
    HttpService,
    LoggedInGuard,
    {provide: 'AUTH_TOKEN', useValue: 'token'},
    {provide: 'AUTH_USER', useValue: 'user'}
  ],
  exports: [LogoutComponent]
})
export class AuthModule {
}
