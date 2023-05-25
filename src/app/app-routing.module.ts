import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login.component';
import { SignupComponent } from './features/auth/signup.component';
import { BuildingCreateFormComponent } from './features/buildings/building-create-form.component';
import { BuildingEditFormComponent } from './features/buildings/building-edit-form.component';
import { BuildingsComponent } from './features/buildings/buildings.component';
import { BuildingDetailComponent } from './features/buildings/building-detail.component';
import { AuthGuard } from './shared/misc/auth.guard';
import { LandingComponent } from './features/landing/landing.component';
import { AccountComponent } from './features/account/account.component';
import { AuthRedirect } from './shared/misc/authRedirect.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    canActivate: [AuthRedirect],
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthRedirect]
  },
  {
    path: 'signup',
    component: SignupComponent,
    // canActivate:[AuthRedirect]
  },
  {
    path: 'account',
    component: AccountComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'buildings',
    children: [
      { path: '', component: BuildingsComponent },
      {
        path: 'create',
        component: BuildingCreateFormComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: 'edit/:id',
        component: BuildingEditFormComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: 'detail/:id',
        component: BuildingDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
