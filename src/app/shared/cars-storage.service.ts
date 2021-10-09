import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {CarsService} from './cars.service';
import { Car } from './Car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsStorageService {
  currentPage : number = 1;
  totalPage : number ;

  constructor(private http : HttpClient,
              private carsService : CarsService) { }

  storeCar(car : Car)
  {
    this.http.post('http://localhost:5000/car',car)
    .subscribe(response => 
      {
        console.log(response);
      });

  }

  fetchCars(page : number)
  {
    this.http.get<{cars : Car[],totalItems : number}>('http://localhost:5000/car/cars/'+page)
    // .pipe(map(cars => 
    //   {
    //     const carsTable = Object.values(cars);
    //     return carsTable.map(car => 
    //       {
    //         const updatecar = {...car,booking : car.booking ? car.booking : []}
    //         if (!car.likes.clients)
    //         {
    //           updatecar.likes={...car.likes,clients : []};
    //         }
    //         return updatecar;
    //       })
    //   }))
    .subscribe(result =>
      {
        this.carsService.setCars(result.cars);
        this.totalPage = result.totalItems;
      })

  }
  DeleteCar(carId :string){
    this.http
   .delete(
     "http://localhost:5000/car/delete/"+carId,
     {headers : new HttpHeaders().append('Content-Type','application/json')}
   ).subscribe(response =>{console.log(response);
  this.fetchCars(this.currentPage)})

 }
}
