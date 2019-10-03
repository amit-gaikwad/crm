import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RealEstateComponent } from './realEstate/realEstate.component';
import { PropertyComponent } from './property/property.component';
import { PropertyListComponent } from './propertylist/propertylist.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import{HighchartsChartComponent} from 'highcharts-angular';
import {AgmCoreModule} from '@agm/core';
import { MapComponent } from './map/map.component';
import { AddPropertyComponent } from './addProperty/addproperty.component';

var routes = [
  { path: "property", component: PropertyComponent },
  { path: "addProperty", component: AddPropertyComponent },
  { path: "propertylist", component: PropertyListComponent },
  { path: "realEstate", component: RealEstateComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "", component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    RealEstateComponent,
    PropertyComponent,
    PropertyListComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ChartComponent,
    HighchartsChartComponent,
    AddPropertyComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey:''
      
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
