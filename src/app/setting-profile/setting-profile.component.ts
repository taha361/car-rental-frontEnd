import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-profile',
  templateUrl: './setting-profile.component.html',
  styleUrls: ['./setting-profile.component.css']
})
export class SettingProfileComponent implements OnInit {
  private value: String= '';
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  
 Onkey(event:any){
   this.value= event.target.value;
 }
}
