import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChangePasswordService } from '../services/change-password.service';

@Component({
  selector: 'app-security-profile',
  templateUrl: './security-profile.component.html',
  styleUrls: ['./security-profile.component.css']
})
export class SecurityProfileComponent implements OnInit {
  @ViewChild('f',{ read: NgForm }) form : any;
 // private password: String= '';
  constructor(private changePasswordService: ChangePasswordService ) { }

  ngOnInit() {
    
  }

/*  updatePassword(password: string) {
    this.changePasswordService.setpwd(password);
} */


 /* Onkey(event:any){
    this.password= event.target.value;
  } */

  onSubmit(){
    console.log('onSubmitpassword ' + this.form.value['passwd'] );
      if(this.form.value['passwd'])
      {
        const pass= this.form.value['passwd'];
        this.changePasswordService.setpwd(pass);
      }

  }

  
}
