import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NaviComponent } from './shared/navi/navi.component';
import { SignupComponent } from './auth/signup/signup/signup.component';
import { LoginComponent } from './auth/login/login/login.component';
import { BulidingFormComponent } from './buliding-form/buliding-form.component';
import { BuildingListingsComponent } from './building-listings/building-listings.component';
import { EditBuildingComponent } from './edit-building/edit-building.component';
import { HttpClientModule } from '@angular/common/http';
import { BuildingDetailComponent } from './building-detail/building-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    SignupComponent,
    LoginComponent,
    BulidingFormComponent,
    BuildingListingsComponent,
    EditBuildingComponent,
    BuildingDetailComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
