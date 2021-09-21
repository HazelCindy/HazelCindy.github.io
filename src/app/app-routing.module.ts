import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    // children: [
    //     {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
    //     {path: 'settings', component: SettingsComponent},
    //     {path: '', redirectTo: 'users'}
    // ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
