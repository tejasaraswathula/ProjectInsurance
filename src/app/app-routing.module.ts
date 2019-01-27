import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DummyComponent } from './dummy/dummy.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductsComponent } from './products/products.component';
import { HealthInsuComponent } from './health-insu/health-insu.component';
import { LifeInsuComponent } from './life-insu/life-insu.component';
import { VehicleInsuComponent } from './vehicle-insu/vehicle-insu.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'dummy', component: DummyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'products', component: ProductsComponent },
  {path: 'healthinsu', component: HealthInsuComponent },
  {path: 'lifeinsu', component: LifeInsuComponent },
  {path: 'vehicleinsu', component: VehicleInsuComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
