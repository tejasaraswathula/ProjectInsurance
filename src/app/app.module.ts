import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DummyComponent } from './dummy/dummy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ProductsComponent } from './products/products.component';
import { HealthInsuComponent } from './health-insu/health-insu.component';
import { LifeInsuComponent } from './life-insu/life-insu.component';
import { VehicleInsuComponent } from './vehicle-insu/vehicle-insu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DummyComponent,
    RegistrationComponent,
    ProductsComponent,
    HealthInsuComponent,
    LifeInsuComponent,
    VehicleInsuComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
