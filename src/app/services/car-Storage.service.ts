
import {Injectable} from "@angular/core"
import {carService} from "./car.service"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Car } from "../shared/Car.model";

@Injectable({
    providedIn: 'root' 
})
export class carStorage {
    constructor(private carService : carService , private http : HttpClient){}


    storeCars() {
        const cars = this.carService.getCars();
        this.http
          .post(
            'http://localhost:5000/car/addCar',
            cars,
            {headers : new HttpHeaders().append('Content-Type','application/json')}
          )
          .subscribe(response => {
            console.log(response);
          });
      }
    

      fetchCars()
      {
        this.http.get('http://localhost:5000/car/cars/'+1)
        .pipe(map(cars => 
          {
            const carsTable = Object.values(cars);
            return carsTable.map(car => 
              {
                const updatecar = {...car,booking : car.booking ? car.booking : []}
                // if (!car.likes.clients)
                // {
                //   updatecar.likes={...car.likes,clients : []};
                // }
                return updatecar;
              })
          }))
        .subscribe(cars =>
          {
            this.carService.setCars(cars);
          })
    
      }


     
        setCar(car :Car){
           this.http
          .post(
            "http://localhost:5000/car/addCar", car,
            {headers : new HttpHeaders().append('Content-Type','application/json')}
          ).subscribe(response =>{console.log(response)})

        }
        getCar(car :Car){
          this.http
         .get(
           "http://localhost:5000/car/addCar", 
           {headers : new HttpHeaders().append('Content-Type','application/json')}
         ).subscribe(response =>{console.log(response)})

       }



}