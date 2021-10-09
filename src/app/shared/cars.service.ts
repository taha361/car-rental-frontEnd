import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Car } from './Car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  carsChanged = new Subject<Car[]>();

  Cars : Car[] = [];
  carsfilter : Car[]= this.Cars;
  markFilter : string[] = [];
  mark : boolean = false;
  available : boolean = false;
  price : boolean = false;
  gearbox : boolean = false;
  seats : boolean = false;
  place : boolean = false;
  availableFilter : string ;
  start : string;
  priceFilter : number;
  gearboxFilter : string;
  seatFilter : number;
  placeFilter : string;


  placesFilter(carsTab : Car[])
  {
    return carsTab.filter(car => car.city === this.placeFilter)
  }

  marksFilter(carsTab : Car[]){
   return carsTab.filter(car => {
      return this.markFilter.includes(car.mark);
    })
  }
  availablesFilter(carsTab : Car[]){
    const start_date = new Date(this.start);
    return carsTab.filter(car => {
      if(!car.booking[0].date_fin)
      {
        return true
      }
      let date_reservation = new Date(car.booking[0].date_fin)
      return start_date.getTime() > date_reservation.getTime();
    })
  }
  pricesFilter(carsTab : Car[])
  {
    return carsTab.filter(car => { car.price < this.priceFilter})
  }
  seatsFilter(carsTab : Car[]){
    return carsTab.filter(car => car.seats === this.seatFilter)
  }
  gearboxsFilter(carsTab : Car[])
  {
    return carsTab.filter(car => car.gearbox === this.gearboxFilter)
  }

  filter(){
    this.carsfilter = this.Cars
    if(this.mark)
    {
     this.carsfilter= this.marksFilter(this.carsfilter);
    }
    if(this.available){
      this.carsfilter=this.availablesFilter(this.carsfilter);
    }
    if(this.gearbox)
    {
      this.carsfilter = this.gearboxsFilter(this.carsfilter);
    }
    if(this.price)
    {
      this.carsfilter = this.pricesFilter(this.carsfilter);
    }
    if(this.seats)
    {
      this.carsfilter = this.seatsFilter(this.carsfilter);
    }
    if(this.place)
    {
      this.carsfilter = this.placesFilter(this.carsfilter);
    }
  }

  addMarkFilter(mark : string){
    this.mark=this.mark || true;
    this.markFilter.push(mark);
    this.filter();
    this.carsChanged.next(this.carsfilter.slice());
    
  }
  addAllMarkFilter()
  {
    this.mark = false;
    this.filter();
    this.carsChanged.next(this.carsfilter.slice());
  }
  deleteMarkFilter(mark : string){
    const index = this.markFilter.indexOf(mark);
    if(index !== -1)
    {
      this.markFilter.splice(index, 1);
      this.filter()
      if(this.markFilter.length === 0){
        this.mark = false;
      }
    }
    this.carsChanged.next(this.carsfilter.slice());
  }
  addseatsFilter(seats : number)
  {
    this.seats = this.seats || true;
    this.seatFilter = seats
    this.filter();
    this.carsChanged.next(this.carsfilter.slice());
  }
  addGearboxFilter(gearbox : string)
  {
    this.gearbox = this.gearbox || true;
    this.gearboxFilter = gearbox;
    this.filter();
    this.carsChanged.next(this.carsfilter.slice());
  }
  addPriceFilter(price : number)
  {
    this.price = this.price || true;
    this.priceFilter = price;
    this.filter();
    this.carsChanged.next(this.carsfilter.slice());
  }
  addPlaceFilter(place : string){
    if(place === "All")
    {
      this.place = false;
      this.filter();
    }else {
      this.place = this.place || true;
      this.placeFilter = place;
      this.filter();
    }

    this.carsChanged.next(this.carsfilter.slice());
  }

  addAvailabilityFilter(a : string)
  {
    this.available = this.available || true;
    this.availableFilter = a;
    this.filter();
    this.carsChanged.next(this.carsfilter.slice());
  }

  clearAllFilter()
  {
    this.place =this.mark = this.available = this.gearbox =this.seats =this.price= true;
    this.filter();
    this.carsChanged.next(this.carsfilter.slice());
  }



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

  getMarques(){
    return this.marques;
  }

  getCars()
  {
    return this.carsfilter.slice();
  }

  addCar(car : Car)
  {
    this.Cars.push(car);
    this.carsChanged.next(this.Cars.slice());
  }

  setCars(cars : Car[])
  {
    this.Cars = cars;
    this.filter();
    this.carsChanged.next(this.carsfilter.slice());
  }

  setFilterMark(mark : string)
  {
    const carsMarkFilter = this.Cars.filter(car => car.mark == mark);
    this.carsfilter=this.carsfilter.concat(carsMarkFilter);
    this.carsChanged.next(this.carsfilter.slice());
    
  }

  deleteFilterMark(mark : string)
  {
    if(this.carsfilter.length == 0)
    {
      this.carsfilter =this.Cars;
    }
    this.carsfilter=this.carsfilter.filter(car => car.mark !== mark);
    this.carsChanged.next(this.carsfilter.slice());
  }

  constructor() { }
}
