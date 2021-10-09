import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { carStorage } from 'src/app/services/car-Storage.service';
import { RentalServiceService } from 'src/app/services/rental-service.service';
import { CarsStorageService } from 'src/app/shared/cars-storage.service';
import { CarsService } from 'src/app/shared/cars.service';

import {Car} from '../../shared/Car.model'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  details = false;
  @Input() car : Car ;
  @Input() index : Number;
  mark:string;
  logIn : boolean = false;

  markCar()
  {
    switch (this.car.mark) {
      case 'BMW': this.mark='https://i2.wp.com/thinkmarketingmagazine.com/wp-content/uploads/2012/08/bmw-logo.png?ssl=1';
        break;
      case 'Tesla': this.mark='https://www.logocentral.info/wp-content/uploads/2020/04/Tesla-Logo-640X590.jpg';
        break;
      case 'Ford': this.mark='https://www.carlogos.org/car-logos/ford-logo-2003.png';
        break;
      case 'Toyota': this.mark='https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png';
        break;
      case 'Honda': this.mark='https://cdn.1min30.com/wp-content/uploads/2017/09/Logo-Honda.jpg';
        break;
    
      default: this.mark='../../../assets/images/outline_directions_car_filled_black_48dp.png'
        break;
    }
  }


  constructor(private route : ActivatedRoute,private router : Router, 
    private authService : AuthService,
    private rentalService : RentalServiceService,
    private carStorage :CarsStorageService,
    ) { }

  ngOnInit(): void {
    this.markCar();
    const user = JSON.parse(localStorage.getItem('userData'));
    if(user)
    {
      this.logIn = user.admin;
    }
    
  }
  onDelete() {
    this.carStorage.DeleteCar(this.car._id);
  }

  showDetails()
  {
    this.details=!this.details;
  }

  onRent()
  {
    if(this.authService.loggedIn())
    {
      console.log('onrent');
      this.rentalService.getStripeSession(this.car._id).subscribe(result => {
        this.rentalService.setSession(result.sessionId);
        this.rentalService.setCar(result.car);
        this.rentalService.setPrice(result.price);
        this.router.navigate(['rental',this.index]);
      })
    }else {
      this.router.navigate(['signUp']);
    }
    

  }


}
