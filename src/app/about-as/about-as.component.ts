import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@Component({
  selector: 'app-about-as',
  templateUrl: './about-as.component.html',
  styleUrls: ['./about-as.component.css',
  '../../assets/css/fontAwesome.css',
  '../../assets/css/hero-slider.css',
  '../../assets/css/owl-carousel.css',
  '../../assets/css/templatemo-style.css',
  "../../assets/css/lightbox.css"]
})
export class AboutAsComponent implements OnInit {



  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  
  }
  login(): void {
    const dialogRef = this.dialog.open(ContactUsComponent, {
      width: '700px',
      height: '550px'
    });

  }

 

}
