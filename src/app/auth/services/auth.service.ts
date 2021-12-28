import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../../environments/environment.prod';
import { AuthResponse } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL:string = environment.baseURL

  constructor(
    private service: HttpClient
  ) { }

  login(email:string,password:string){
    const url = `${this.baseURL}/auth`
    const body = {email,password}

    return this.service.post<AuthResponse>(url,body);
  }
}
