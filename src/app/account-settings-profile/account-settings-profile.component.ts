import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModifyUsernameService } from '../services/modify-username.service' ;

@Component({
  selector: 'app-account-settings-profile',
  templateUrl: './account-settings-profile.component.html',
  styleUrls: ['./account-settings-profile.component.css']
})
export class AccountSettingsProfileComponent implements OnInit {
  @ViewChild('v',{ read: NgForm }) form : any;
 // private username: String= '';
  constructor(private modifyUsernameService: ModifyUsernameService) { }

  ngOnInit(): void {
  }

  /*updateUser(username: string) {
    this.modifyUsernameService.setuser(username);
  } */


 /* Onkey(event:any){
    this.username= event.target.value;
  } */

  onSubmit(){
    if(this.form.value['name'])
    {
      const name= this.form.value['name'];
      this.modifyUsernameService.setuser(name);
    }
    
  }


 }
