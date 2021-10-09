import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http"
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import {User} from "../shared/user.model";
import { Rental } from "../shared/rental.model";
import { Router } from "@angular/router";
import { SigninComponent } from "../signin/signin.component";
import { MatDialog } from "@angular/material/dialog";
import Swal from "sweetalert2";


 export interface AuthResponseData {
user :User ,
msg :string ;
token :string;

 }

@Injectable({
    providedIn : "root"
})

export class AuthService {
  
  user = new BehaviorSubject<User>(null);
    
     admin :string;
     
   
    constructor(private http : HttpClient , private router : Router, private dialog : MatDialog){}

  
    loggedIn(){
      return !!localStorage.getItem('userData');
    }
// Utiliser pour Guard
    isAdmin() {
    
      const userData: {
        username: string,
        firstname: string,
        lastname: string,
        phone: string,
        address: string,
        email :string,
        admin :boolean,
        rentals : [],
        token :string
      } = JSON.parse(localStorage.getItem('userData'));
        return userData.admin;
    
    }



    
    signup(username :string , lastname :string ,firstname: string ,email: string, password: string ,phone :string ,address: string ) {
      return this.http
        .post<AuthResponseData>(
          'http://localhost:5000/api/user/register',
          { "username": username,
            "lastname": lastname,
            "firstname" : firstname,
            "email": email,
            "password": password,
            "address" :address,
            "phone" : phone

        
          },{headers : new HttpHeaders().append('Content-Type','application/json')}
        )
        .pipe(
          catchError(this.handleError),
          tap(resData => {
            this.handleAuthentication(
              resData.user.username,
              resData.user.firstname,
              resData.user.lastname,
              resData.user.phone,
              resData.user.address,
              resData.user.admin,
              resData.user.rentals,
              resData.user.email,
              resData.token
             
            );
           
          })
        ).subscribe(
          resData => {
            this.router.navigate(['/home']);
            
            console.log(resData);
            Swal.fire({
              title: 'Good Job',
              text: 'Your subscription has been confirmed!',
              icon: 'success',
            
            })
           
          },
          errorMessage => {
            console.log(errorMessage);
          
            Swal.fire({
              title: 'ERROR',
              text: 'Your subscription has been not confirmed!',
              icon: 'error',
            
            })
          
          }
        );
    }



    login(email: string, password: string) {
       this.http
        .post<AuthResponseData>(
          'http://localhost:5000/api/user/login',
          {
            email: email,
            password: password,
        
          },
          {headers : new HttpHeaders().append('Content-Type','application/json')}
        )
        .pipe(
          catchError(this.handleError),
          tap(resData => {
            this.handleAuthentication(
              resData.user.username,
              resData.user.firstname,
              resData.user.lastname,
              resData.user.phone,
              resData.user.address,
              resData.user.admin,
              resData.user.rentals,
              resData.user.email,
              resData.token
            );
           
          })
        ).subscribe(
          resData => {
          
            console.log(resData);
            this.router.navigate(['/categories']);
            Swal.fire({
              title: 'Welcome',
              text: "Hi "+ resData.user.lastname
               +" you are welcome !!",
              icon: 'success',
            
            })
       
    },
    errorMessage => {
      Swal.fire({
        title: 'Try Again',
        text: "bad credential",
        icon: 'error',
      
      })
      console.log(errorMessage);
      
    })

  }
    logout() {
      this.user.next(null);
      this.router.navigate(['/home']);
      localStorage.removeItem('userData');
    
    }


   



    private handleAuthentication(
      username :string,firstname: string , lastname : string , phone:string ,address :string,admin:boolean , rentals : Rental[],
      email: string,  token: string
    ) {
      const user = new User(username ,firstname, lastname,phone,address, email,admin,rentals,token );
      this.user.next(user);
    
      localStorage.setItem('userData', JSON.stringify(user));
      
      
    }



  
    private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }
  }