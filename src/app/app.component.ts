import { Component } from '@angular/core';
import {AuthService} from './services/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'all';
  constructor(private service:AuthService){}
  logout(){
    return this.service.logout();
  }
  Isloggedin(){
    return this.service.isloggedin();
  }
  
  
}
