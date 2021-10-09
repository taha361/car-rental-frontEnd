import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { RentalServiceService } from 'src/app/services/rental-service.service';
import { CarsService } from '../../shared/cars.service';

@Component({
  selector: 'app-place-date',
  templateUrl: './place-date.component.html',
  styleUrls: ['./place-date.component.css']
})
export class PlaceDateComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['All','Tunis', 'Sousse', 'sfax','Monestir','Mahdia','Jerba','Bizerte','Ben Arous','Nabeul','Gabes','Ariana','Jendouba','kairouan','Tozeur','Zaghouan','Tataouine','Manouba'];
  filteredOptions: Observable<string[]>;

  campaignOne: FormGroup;
  campaignTwo: FormGroup;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    console.log(this.campaignTwo.value.start);
    console.log(this.campaignTwo.value.start);
    console.log(this.campaignTwo.value.end);
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  constructor(private rentService : RentalServiceService,
    private carService : CarsService) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16))
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19))
    });
  }

  logChange(event,str : string){
    if(event != null)
    {
      if(str === 'start'){
        this.rentService.setstart(event.toString().split('(')[0].trim());
      }else{
        this.rentService.setend(event.toString().split('(')[0].trim());
      }
      // console.log(str + ': ' +event.toString().split('(')[0].trim());
    }else{
    if(str === 'start'){
      this.rentService.setstart(null);
      // console.log('start : ' + null);
      
    }else{
      this.rentService.setend(null);
      // console.log('end: ' + null);

    }

  }



    
  }
  placeChange(event)
{
  console.log(event);
  this.carService.addPlaceFilter(event);
}
}
