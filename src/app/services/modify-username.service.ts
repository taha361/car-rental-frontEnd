import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import {User} from "../shared/user.model" ;
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModifyUsernameService {

  constructor(private httpClient: HttpClient) { }


  
    setuser(username :String){
      console.log('in setuser : ' + username);
      
       this.httpClient
     .put(
       "http://localhost:5000/api/user/updateUser", {username: username},
       {headers : new HttpHeaders().append('Content-Type','application/json')}
     ).subscribe(response => {console.log(response)})
    }
  
     }

