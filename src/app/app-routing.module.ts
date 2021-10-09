import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {CategoriesComponent} from './categories/categories.component';
import { AboutAsComponent} from './about-as/about-as.component';
import { AddCarComponent } from './admin/add-car/add-car.component';
import { RentalFormComponent } from './rental-form/rental-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {AuthGuard} from './services/auth.guard.service'

import { ProfileComponent } from './profile/profile.component';
import { AccountSettingsProfileComponent } from './account-settings-profile/account-settings-profile.component';
import { SecurityProfileComponent } from './security-profile/security-profile.component';
import { HistoryProfileComponent } from './history-profile/history-profile.component';
import { InfoMenuProfileComponent } from './info-menu-profile/info-menu-profile.component';
import { NotificationProfileComponent } from './notification-profile/notification-profile.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthInterceptorService} from './services/auth.interceptor.service'
import { RentalResolver } from './rental-form/rental-resolver.service';
import { AuthService } from './services/auth.service';
import { NewpasswordComponent } from './signin/reset-password/newpassword/newpassword.component';


const routes: Routes = [
  {path : '' , redirectTo : '/home', pathMatch : 'full'},
  {path : 'home' , component : HomeComponent},
  {path : 'categories',component: CategoriesComponent},
  {path :'rental/:id' , component :RentalFormComponent,resolve : {service : RentalResolver}},
  {path : 'signUp' , component : SignUpComponent},
  {path :'about_as' , component : AboutAsComponent},
  {path :'addCar' , component : AddCarComponent  , canActivate :[AuthGuard]},
  {path :'about_as' , component : AboutAsComponent},
  {path: 'reset/:token', component: NewpasswordComponent},
  { path: 'profile', component: ProfileComponent, children: [
    { path: 'settings', component: AccountSettingsProfileComponent },
    { path: 'security', component: SecurityProfileComponent },
    { path: 'history', component: HistoryProfileComponent },
    { path: 'profileinformation', component: InfoMenuProfileComponent },
    { path: 'notifications', component: NotificationProfileComponent },
   
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers :[ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }]
})
export class AppRoutingModule { 
  
}
