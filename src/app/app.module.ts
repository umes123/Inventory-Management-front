import { Authguard2Service } from './services/authguard2/authguard2.service';
import { AuthguardService } from './services/authguard/authguard.service';
import { AuthService } from './services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CrudComponent } from './components/crud/crud.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './services/product.service';
import { TableComponent } from './components/table/table.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    SignupComponent,
    LoginComponent,
    TableComponent,
    ListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'crud',component:CrudComponent,canActivate:[AuthguardService]},
      {path:'signup',component:SignupComponent,canActivate:[Authguard2Service]},
      {path:'login',component:LoginComponent,canActivate:[Authguard2Service]},
      {path:'table',component:TableComponent},
      {path:'**',component:LoginComponent}
    ])
  ],
  providers: [AuthService,AuthguardService,Authguard2Service,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
