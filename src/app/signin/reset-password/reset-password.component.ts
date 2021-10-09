import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {MailService} from '../../services/mail.service'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  email=""

  constructor(private MailService : MailService ,private router : Router) { }

  ngOnInit(): void {
  }
  newPassword(f :NgForm){
const email=f.value.email ;
this.MailService.resetPassword(email);


  }
}
