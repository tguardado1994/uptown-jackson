import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { SignupComponent } from './auth/signup/signup/signup.component';
import { BulidingFormComponent } from './buliding-form/buliding-form.component';
import { BuildingListingsComponent } from './building-listings/building-listings.component';
import { EditBuildingComponent } from './edit-building/edit-building.component';


const routes: Routes = [

  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "create-building",
    component: BulidingFormComponent
  },
  {
    path: "building-listings",
    component: BuildingListingsComponent
  },
  {
    path: "edit-building",
    component: EditBuildingComponent
  },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
