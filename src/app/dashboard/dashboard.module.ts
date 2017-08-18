import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard.routing';
import {AuthModule} from '../shared/auth/auth.module';
import {HeaderComponent} from './header/header.component';
import {DashboardComponent} from './dashboard.component';
import {TodoService} from './todos/todo.service';
import {TodosComponent} from './todos/todos.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AuthModule
  ],
  declarations: [HeaderComponent, TodosComponent, DashboardComponent],
  providers: [TodoService]
})
export class DashboardModule {
}
