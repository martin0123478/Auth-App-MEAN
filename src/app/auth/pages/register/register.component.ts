import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
form:FormGroup = this.fb.group({
  name:['test4',[Validators.required]],
  email:['test4@test.com',[Validators.required,Validators.email]],
  password:['123456',[Validators.required,Validators.minLength(6)]]


})
  constructor(
    private fb:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  registrar(){
    console.log(this.form.value)
    console.log(this.form.valid)
    this.router.navigateByUrl('/dashboard')
  }

}
