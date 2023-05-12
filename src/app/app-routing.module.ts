import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { SignupComponent } from './auth/signup/signup/signup.component';
import { BulidingFormComponent } from './buliding-form/buliding-form.component';
import { BuildingListingsComponent } from './building-listings/building-listings.component';
import { EditBuildingComponent } from './edit-building/edit-building.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';


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
    path: "edit-building/:id",
    component: EditBuildingComponent
  },
  {
    path: "building-detail/:id",
    component: BuildingDetailComponent
  },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
