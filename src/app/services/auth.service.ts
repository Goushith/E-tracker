import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of , throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router ) { }

  setToken(token:string):void {
    localStorage.setItem('token', token)
  }

  getToken():string | null {
    return localStorage.getItem("token")
  }

  isloggedIn(){
    return this.getToken()!== null
  }

  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['login'])
  }


  login({email, password}:any): Observable<any>{
    if(email==='abc@gmail.com' && password==="qwer"){
      this.setToken('asdfghjklqwertyuiopzxcvbnm');
      return of({name: " Goushith C Mohan" , email : "abc@gmail.com"})
    }
    return throwError(new Error('Failed To login')); 
  }
}








