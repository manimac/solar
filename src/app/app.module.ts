import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { LeadsComponent } from './pages/leads/leads.component';
import { LeadHistoriesComponent } from './pages/lead-histories/lead-histories.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const route: Routes = [
  {
    path:'', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'leads', component: LeadsComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'leads-histories', component: LeadHistoriesComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'reports', component: ReportsComponent, canActivate: [AuthGuardService]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LeadsComponent,
    LeadHistoriesComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route, {scrollPositionRestoration: 'enabled'}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
