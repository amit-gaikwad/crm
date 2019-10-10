import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { HighchartsChartComponent } from 'highcharts-angular';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { AddPropertyComponent } from './addProperty/addproperty.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginService } from './login/login.service';
import { SignUpService } from './signup/signup.service';
import { MyContentComponent } from './content/content.component';
import { RkComponent } from './1RK/rk.component';
import { PropertyHeaderComponent } from './propertyheader/propertyheader.component';
import { BhkComponent } from './1BHK/1bhk.component';
import { Bhk2Component } from './2BHK/2bhk.component';
import { ClientComponent } from './client/client.component';
import { ClientListComponent } from './clientlist/clientlist.component';
// import { MydashboardComponent } from './Mydashboard/mydashboard.component';

var routes = [


  { path: "propertylist", component: PropertyListComponent },
  { path: "realEstate", component: RealEstateComponent },

  {
    path: "dashboard", component: DashboardComponent, children: [
      { path: "realEstate", component: RealEstateComponent },
      { path: "propertyheader", component: PropertyHeaderComponent },
      {
        path: "property", component: PropertyComponent, children: [
          { path: "1RK", component: RkComponent },
          { path: "1BHK", component: BhkComponent },
          { path: "2BHK", component: Bhk2Component },
          { path: "", component: RkComponent }
        ]
      },
      { path: "addProperty", component: AddPropertyComponent },
      { path: "", component: MyContentComponent },
      {
        path: "client", component: ClientComponent, children: [
          { path: "", component: ClientListComponent },
          { path: "", component: ClientComponent }
        ]
      },

    ]
  },
  { path: "", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "sidebar", component: SidebarComponent }

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
    AddPropertyComponent,
    SidebarComponent,
    MyContentComponent,
    RkComponent,
    PropertyHeaderComponent,
    BhkComponent,
    Bhk2Component,
    ClientComponent,
    ClientListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ''

    }),
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService, SignUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
