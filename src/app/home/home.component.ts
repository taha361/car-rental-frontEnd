
import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';



import {Car} from '../shared/Car.model';
import { SignUpComponent } from '../sign-up/sign-up.component';
import {CarsService} from "../shared/cars.service"
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
  "../../assets/css/lightbox.css"
  ]
})
export class HomeComponent implements OnInit {

 cars :Car[];
  marques= [];
 subscription: Subscription;




  constructor(private dialog: MatDialog  ,public CarsService :CarsService , public router : Router ) {
    
   }

  ngOnInit(): void {
    this.subscription = this.CarsService.carsChanged
    .subscribe(
      (cars: Car[]) => {
        this.cars= cars.slice(0,4);
      }
    );
  this.cars = this.CarsService.getCars();
  this.marques=this.CarsService.getMarques();
  
  }


  navBrands(){

    this.router.navigate(['/categories']);
  }

}
