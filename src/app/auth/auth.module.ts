import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AuthService} from './auth.service';
import {FormsModule} from '@angular/forms';
import {LogoutComponent} from './logout/logout.component';
import {AuthRoutingModule} from './auth.routing';
import {LoggedInGuard} from './logged-in.guard';
import {MockBackendModule} from '../mock-backend/mock-backend.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    // HttpModule <- use this in real implementation
    MockBackendModule // <- provide fake Http service, do not use in production!
  ],
  declarations: [LoginComponent, LogoutComponent],
  providers: [
    AuthService,
    LoggedInGuard,
    {provide: 'AUTH_TOKEN', useValue: 'token'},
    {provide: 'AUTH_USER', useValue: 'user'}
  ],
  exports: [LogoutComponent]
})
export class AuthModule {
}
