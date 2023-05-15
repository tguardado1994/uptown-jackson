import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './auth/signup.component';
import { LoginComponent } from './auth/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ToastComponent } from './shared/components/ui/toast.component';
import { ButtonComponent } from './shared/components/ui/button.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { BuildingCreateFormComponent } from './features/buildings/building-create-form.component';
import { BuildingEditFormComponent } from './features/buildings/building-edit-form.component';
import { BuildingsComponent } from './features/buildings/buildings.component';
import { BuildingDetailComponent } from './features/buildings/building-detail.component';
import { LandingComponent } from './features/landing/landing.component';
import { AccountComponent } from './features/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ToastComponent,
    ButtonComponent,
    NavComponent,
    BuildingCreateFormComponent,
    BuildingEditFormComponent,
    BuildingsComponent,
    BuildingDetailComponent,
    LandingComponent,
    AccountComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
