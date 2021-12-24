import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private rout:Router
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.rout.navigateByUrl('/auth')

  }

}
