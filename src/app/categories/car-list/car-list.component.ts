import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Car } from 'src/app/shared/Car.model';
import { PageEvent } from '@angular/material/paginator';

import {CarsService} from '../../shared/cars.service'
import { CarsStorageService } from 'src/app/shared/cars-storage.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit, OnDestroy {

  subsc : Subscription;
  pageIndex : number = 1;
  carsTable : Car[] = [];
  public pageSlice= this.carsTable.slice(0,5);

  constructor(private carsService : CarsService, 
    private carStorage : CarsStorageService) { }

  ngOnInit(): void {
   this.carsTable= this.carsService.getCars();
   this.subsc=this.carsService.carsChanged.subscribe(
     (cars : Car[]) => 
     {
       this.carsTable=cars;
     }
   );
  }
  getNext() {
    if(this.carStorage.currentPage * 6 < this.carStorage.totalPage  )
    {
      this.carStorage.currentPage ++;
      this.carStorage.fetchCars(this.carStorage.currentPage);

    }
  }
  getprev(){
    if(this.carStorage.currentPage > 1){
      this.carStorage.currentPage--;
      this.carStorage.fetchCars(this.carStorage.currentPage);
    }
  }

  OnPageChange(event: PageEvent){
    console.log(event);
    const startIndex= event.pageIndex + event.pageSize;
    let endIndex= startIndex + event.pageSize;
    if(endIndex > this.carsTable.length){
      endIndex= this.carsTable.length;
    }
    this.pageSlice= this.carsTable.slice(startIndex,endIndex);
  }

  ngOnDestroy()
  {
    this.subsc.unsubscribe();

  }

}
