import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponse } from '../../interfaces/interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
form:FormGroup = this.fb.group({
  email:['test2@gmail.com',[Validators.required,Validators.email]],
  password:['123456',[Validators.required,Validators.minLength(6)]],
})
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }
login(){
  console.log(this.form.value)
  // console.log(this.form.valid)
  const {email,password} = this.form.value;
  this.authService.login(email,password)
  .subscribe(ok =>{
    if(ok){
      this.router.navigateByUrl('/dashboard')
    }else{
      //TODO
    }
    
  })
    
   

}
}
