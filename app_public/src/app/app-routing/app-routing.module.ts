import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from '../homepage/homepage.component';
import { AboutComponent } from '../about/about.component';
import { DetailsPageComponent } from '../details-page/details-page.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'location/:locationid',
    component: DetailsPageComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: '**',
    component: HomepageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
