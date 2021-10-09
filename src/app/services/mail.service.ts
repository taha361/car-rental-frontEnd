
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable( { providedIn: 'root' })


export class MailService {

constructor(private http: HttpClient, private router :Router){};

    sendMail(email :string, name:string ,message:string) {
        this.http
          .post(
            'http://localhost:5000/mail',{'email' :email,
            'name' :name,
            'message' :message
          },{headers : new HttpHeaders().append('Content-Type','application/json')}
          )
          .subscribe(response => {
            console.log(response);
          });
      }



      // reset password 
    resetPassword(email :string ){
      this.http.post<{msg : string}>( 'http://localhost:5000/api/user/postReset',{'email' :email}
      ,{headers : new HttpHeaders().append('Content-Type','application/json')})
      .subscribe(res=>{
        Swal.fire({
          title: 'Great !!',
          text: res.msg,
          icon: 'success',
        
        })
        
      })
    }

    newPassword(password :string , passwordToken :string){
      this.http.post("http://localhost:5000/api/user/postNewPassword",{"password" : password,
    "passwordToken" :passwordToken}).subscribe(response =>{
      this.router.navigate(['/home']);
      Swal.fire({
        title: 'GOOd',
        text:  "password reset successfully",
        icon: 'success',
      
      })
    },
    errorMessage => {
      console.log(errorMessage);
      
    })
    }
}

