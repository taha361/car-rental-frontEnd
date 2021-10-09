import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import {User} from "../shared/user.model" ;


@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private httpClient: HttpClient) { }

  setpwd(mdp :String){
    this.httpClient
   .put(
     "http://localhost:5000/api/user/updatepassword",{newPassword :mdp},
     {headers : new HttpHeaders().append('Content-Type','application/json')}
   ).subscribe(response =>{console.log(response)})

  }

}
