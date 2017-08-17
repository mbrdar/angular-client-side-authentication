import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard.routing';
import {AuthModule} from '../shared/auth/auth.module';
import {HeaderComponent} from './header/header.component';
import {ContentComponent} from './content/content.component';
import {DashboardComponent} from './dashboard.component';
import {ContentService} from './content/content.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AuthModule
  ],
  declarations: [HeaderComponent, ContentComponent, DashboardComponent],
  providers: [ContentService]
})
export class DashboardModule {
}
