import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from "sweetalert2"
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  error: string = null;

  constructor(private authService :AuthService , private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){

    if (!form.valid) {
      return;}
    

// Swal.fire({
//   title: 'Good Job',
//   text: 'Your subscription has been confirmed!',
//   icon: 'success',

// })


const email = form.value.email;
const lastname = form.value.lastname;
const username = form.value.username;
const firstname = form.value.firstname;
const phone = form.value.phone;
const address = form.value.address;
const password = form.value.password ;
console.log(lastname);




this.authService.signup(username,lastname,firstname,email,password,phone,address);

form.reset();
}


  }


