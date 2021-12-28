import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../../environments/environment.prod';
import { AuthResponse, Usuario } from '../interfaces/interfaces';
import {catchError, map, tap} from 'rxjs/operators'
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL:string = environment.baseURL
  private _usuario!:Usuario

  constructor(
    private service: HttpClient
  ) { }

  login(email:string,password:string){
    const url = `${this.baseURL}/auth`
    const body = {email,password}

    return this.service.post<AuthResponse>(url,body)
    .pipe(
      tap(res=>{
        if(res.ok ){
          this._usuario = {
            name:res.name!,
            uid:res.uid!
          }
        }
      }),
      map(response => response.ok ),
      catchError(err => of(err.error.msg))
    )
  }

  get usuario(){
    return {...this._usuario}
  }
}
