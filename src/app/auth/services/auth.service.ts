import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { environment } from '../../../environments/environment.prod';
import { AuthResponse, Usuario } from '../interfaces/interfaces';
import {catchError, map, tap} from 'rxjs/operators'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL:string = environment.baseURL
  private _usuario!:Usuario

  constructor(
    private service: HttpClient
  ) { }

  registro(name:string,email:string,password:string){
    const url = `${this.baseURL}/new`
    const body = {name,email,password}
    return this.service.post(url,body)

  }

  login(email:string,password:string){
    const url = `${this.baseURL}/auth`
    const body = {email,password}

    return this.service.post<AuthResponse>(url,body)
    .pipe(
      tap(res=>{
        if(res.ok ){
          localStorage.setItem('token',res.token!);
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

  validarToken():Observable<boolean>{
    const url = `${this.baseURL}/renew`
    const headers = new HttpHeaders()
    .set('x-token',localStorage.getItem('token') || '')
   return this.service.get<AuthResponse>(url,{headers})
   .pipe(
     map(res =>{
      localStorage.setItem('token',res.token!);
      this._usuario = {
        name:res.name!,
        uid:res.uid!
      }
       return res.ok
     }),
     catchError( err => of(false))
   )
  }

  logout(){
    localStorage.clear();
  }
}
