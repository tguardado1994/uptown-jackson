import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './features/auth/signup.component';
import { LoginComponent } from './features/auth/login.component';
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
import { ArrowIconComponent } from './shared/components/icons/arrow-icon.component';
import { LoadingIconComponent } from './shared/components/icons/loading-icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CloseIconComponent } from './shared/components/icons/close-icon.component';
import { EmailIconComponent } from './shared/components/icons/email-icon.component';
import { LockIconComponent } from './shared/components/icons/lock-icon.component';
import { CheckShieldIconComponent } from './shared/components/icons/check-shield-icon.component';
import { CheckIconComponent } from './shared/components/icons/check-icon.component';
import { FailCheckIconComponent } from './shared/components/icons/fail-check-icon.component';
import { FooterComponent } from './features/footer/footer.component';
import { PencilIconComponent } from './shared/components/icons/pencil-icon.component';
import { PhoneIconComponent } from './shared/components/icons/phone-icon.component';
import { ClipboardIconComponent } from './shared/components/icons/clipboard-icon.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { PlusIconComponent } from './shared/components/icons/plus-icon.component';
import { ModalComponent } from './shared/components/ui/modal.component';
import { BuildingCardComponent } from './features/buildings/building-card.component';
import { PlaceholderIconComponent } from './shared/components/icons/placeholder-icon.component';

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
    AccountComponent,
    ArrowIconComponent,
    LoadingIconComponent,
    CloseIconComponent,
    EmailIconComponent,
    LockIconComponent,
    CheckShieldIconComponent,
    CheckIconComponent,
    FailCheckIconComponent,
    FooterComponent,
    PencilIconComponent,
    PhoneIconComponent,
    ClipboardIconComponent,
    AboutUsComponent,

    PlusIconComponent,
    ModalComponent,
    BuildingCardComponent,
    PlaceholderIconComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
