import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
form:FormGroup = this.fb.group({
  email:['test1@tes.com',[Validators.required,Validators.email]],
  password:['123456',[Validators.required,Validators.minLength(6)]],
})
  constructor(
    private fb:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
login(){
  console.log(this.form.value)
  console.log(this.form.valid)
  this.router.navigateByUrl('/dashboard')

}
}
