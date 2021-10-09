import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../shared/Car.model';
import {Rental } from '../shared/rental.model';

@Injectable({
  providedIn: 'root'
})
export class RentalServiceService {
  car : Car;
  start_rental : string = 'Sun Jun 13 2021 00:00:00 GMT+0100';
  end_rental : string = 'Wed Jun 16 2021 00:00:00 GMT+0100';
  durations : number = 1;
  price : number;
  
  rent : Rental;
  sessionId : string;

  get(){
    
    return {car : this.car,start_rental : this.start_rental,end_rental : this.end_rental,durations : this.durations,price : this.price,sessionId : this.sessionId};
  }
  setSession(sessionId : string)
  {
    this.sessionId = sessionId;
  }
  constructor(private http : HttpClient) { }

  getStripeSession(carId : string)
  {
    const start = new Date(this.start_rental);
    let end=new Date(this.end_rental);
    if(start.getTime() > end.getTime() || this.end_rental === null)
    {
      this.end_rental = this.start_rental;
      this.end_rental = this.start_rental;
      end = new Date(this.end_rental);
    }
    this.durations =Math.round((end.getTime()-start.getTime())/(1000*3600*24));
    if(this.durations === 0 )
    {this.durations=1}
    return this.http.post<{car : Car,price : number,sessionId : string}>('http://localhost:5000/rent/payement',
    {carId : carId,start_rental : this.start_rental,end_rental : this.end_rental,duration : this.durations},
    {headers : new HttpHeaders().append('Content-Type','application/json')});
  }

  setstart(dat : string)
  {
    this.start_rental = dat;
  }
  setend(dat : string)
  {
    this.end_rental = dat;
  }
  setCar(car : Car)
  {
    this.car = car;
  }
  setPrice(price : number)
  {
    this.price = price;
  }
}
