import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  
})
export class NewpasswordComponent implements OnInit {
  

  constructor(private MailService : MailService ,private route : ActivatedRoute ,private router : Router) { }

  ngOnInit(): void {
  }
  
  newPassword(f: NgForm){
    const password = f.value.password; 
    let token:string;
     this.route.params.subscribe(params => { token = params['token']})
    this.MailService.newPassword(password,token);
  }

}
