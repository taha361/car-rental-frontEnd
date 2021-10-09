import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Car} from "../shared/Car.model"


@Injectable( { providedIn: 'root' })
export class carService {
      cars : Car[] = [];
        // {mark:'Citroën',model :'Nemo ',location :'Tunis/centre ville',seats:4,speed:120 ,gearbox:'OIl Mills',imgPath:"assets/img/citron.jpg",price: 900},
        // {mark:'Bmw',model :'e92 316i KIT M',location :'Sousse/sahloul',seats:4,speed:200 ,gearbox:'Paper Mills',imgPath:"assets/img/bmw.jpg",price: 2500},
        // {mark:'Passat',model :'b8 tdi',location :'Monastir',seats:4,speed:140 ,gearbox:'OIl Mills',imgPath:"assets/img/passat.jpg",price: 500},
        // {mark:'Peugeot',model :'301',location :'Tunis/Barcelona',seats:4,speed:130 ,gearbox:'OIl Mills',imgPath:"assets/img/peugeot.jpg",price: 2000}] ;
    

        marques =[{name :'alfa-romeo',imgpath:'assets/img/categories/alfaromeo.png'},
{name :'audi',imgpath:'assets/img/categories/audi.png'},
{name :'bmw',imgpath:'assets/img/categories/bmw.png'},
{name :'changan',imgpath:'assets/img/categories/changan.png'},
{name :'chery',imgpath:'assets/img/categories/chery.png'},
{name :'dfsk',imgpath:'assets/img/categories/dfsk.png'},
{name :'dongfeng',imgpath:'assets/img/categories/dongfeng.png'},
{name :'fiat',imgpath:'assets/img/categories/fiat.png'},
{name :'ford',imgpath:'assets/img/categories/ford.png'},
{name :'foton',imgpath:'assets/img/categories/foton.png'},
{name :'geely',imgpath:'assets/img/categories/geely.png'},
{name :'great-wall',imgpath:'assets/img/categories/reat-wall.png'},
{name :'haval',imgpath:'assets/img/categories/haval.png'},
{name :'honda',imgpath:'assets/img/categories/honda.png'},
{name :'hyundai',imgpath:'assets/img/categories/hyundai.png'},
{name :'jaguar',imgpath:'assets/img/categories/jaguar.png'},
{name :'jeep',imgpath:'assets/img/categories/jeep.png'},
{name :'kia',imgpath:'assets/img/categories/kia.png'},
{name :'land-rover',imgpath:'assets/img/categories/landlover.png'},
{name :'mahindra',imgpath:'assets/img/categories/maindra.png'},
{name :'mazda',imgpath:'assets/img/categories/mazda.png'},
{name :'mercedes-benz',imgpath:'assets/img/categories/mercedes-benz.png'},
{name :'mg',imgpath:'assets/img/categories/mg.png'},
{name :'mini',imgpath:'assets/img/categories/mini.png'},
{name :'mitsubishi',imgpath:'assets/img/categories/mitsubishi.png'},
{name :'peugeot',imgpath:'assets/img/categories/peugeot.png'},
{name :'porsche',imgpath:'assets/img/categories/porshe.png'},
{name :'seat',imgpath:'assets/img/categories/seat.png'},
{name :'skoda',imgpath:'assets/img/categories/skoda.png'},
{name :'ssangyong',imgpath:'assets/img/categories/ssangyong.png'},
{name :'suzuki',imgpath:'assets/img/categories/suzuki.png'},
{name :'tata',imgpath:'assets/img/categories/tata.png'},
{name :'toyota',imgpath:'assets/img/categories/toyota.png'},
{name :'volkswagen',imgpath:'assets/img/categories/volkswagen.png'},
{name :'wallyscar',imgpath:'assets/img/categories/wallyscar.png'}
];





        carsChanged = new Subject<Car[]>();


        getMarques(){
          return this.marques;
        }

        getCars() {
            return this.cars.slice();
          }
        
          getCar(index: number) {
            return this.cars[index];
          }

          setCars(cars: Car[]) {
            this.cars = cars;
            this.carsChanged.next(this.cars.slice());
          }
          addCar(car: Car) {
            this.cars.push(car);
            this.carsChanged.next(this.cars.slice());
          }
        
          updateCar(index: number, newCar: Car) {
            this.cars[index] = newCar;
            this.carsChanged.next(this.cars.slice());
          }
        
          deleteCar(index: number) {
            this.cars.splice(index, 1);
            this.carsChanged.next(this.cars.slice());
          }


}