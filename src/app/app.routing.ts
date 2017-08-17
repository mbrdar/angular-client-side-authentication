import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoggedInGuard} from './shared/auth/logged-in.guard';

export const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  // {path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule', canActivate: [LoggedInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
