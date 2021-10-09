import { Component, OnInit } from '@angular/core';
import { UserInformationService } from '../services/user-information.service';
import { User } from "../shared/user.model";

@Component({
  selector: 'app-info-menu-profile',
  templateUrl: './info-menu-profile.component.html',
  styleUrls: ['./info-menu-profile.component.css']
})
export class InfoMenuProfileComponent implements OnInit {

  user :  User ;

  constructor(private service:UserInformationService) { }

  ngOnInit() {
    this.service.getInformation().subscribe(response => {
      this.user = new User(response.user.username,response.user.firstname,response.user.lastname,response.user.phone,response.user.address,response.user.email,response.user.admin,response.user.rentals,response.user.token)   
    }); 
  }

}
