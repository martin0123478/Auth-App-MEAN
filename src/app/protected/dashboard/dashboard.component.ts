import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Usuario } from '../../auth/interfaces/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
    *{
      margin:15px;
    }
    `
  ]
})
export class DashboardComponent implements OnInit {

  get usuario(){
    return this.authService.usuario
  }
  constructor(
    private rout:Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.rout.navigateByUrl('/auth')
    this.authService.logout()

  }

}
