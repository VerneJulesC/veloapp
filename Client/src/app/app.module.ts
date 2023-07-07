import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { PatientsComponent } from './components/patients/patients.component';
import { UsersComponent } from './components/users/users.component';
import { DatabasesComponent } from './components/databases/databases.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { FacilityComponent } from './components/facility/facility.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { VeloService } from './services/velo.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ContentComponent,
    SchedulesComponent,
    DoctorsComponent,
    FacilitiesComponent,
    PatientsComponent,
    UsersComponent,
    DatabasesComponent,
    ProfileComponent,
    DoctorComponent,
    FacilityComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ AuthService, AuthGuard, VeloService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
