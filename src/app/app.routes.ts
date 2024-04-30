import { Routes } from '@angular/router';
import { AuthPageComponent } from './modules/AuthModule/pages/auth-page/auth-page.component';
import { UserPageComponent } from './modules/UserModule/pages/user-page/user-page.component';
import { RolePageComponent } from './modules/RoleModule/pages/role-page/role-page.component';
import { SignInPageComponent } from './modules/AuthModule/pages/sign-in-page/sign-in-page.component';
import { authenticationGuard } from './modules/SharedModule/guards/authentication.guard';
import { HomePageComponent } from './modules/Home/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [authenticationGuard],
    children: [
      {
        path: 'user',
        component: UserPageComponent,
        canActivate: [authenticationGuard],
      },
      {
        path: 'role',
        component: RolePageComponent,
        canActivate: [authenticationGuard],
      },
    ],
  },
  {
    path: 'auth',
    component: AuthPageComponent,
  },
  { path: 'signin', component: SignInPageComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: AuthPageComponent },
];
