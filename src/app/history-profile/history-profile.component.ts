import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history-service.service';
import { Car } from '../shared/Car.model';
import { Rental } from "../shared/rental.model";

@Component({
  selector: 'app-history-profile',
  templateUrl: './history-profile.component.html',
  styleUrls: ['./history-profile.component.css']
})
export class HistoryProfileComponent implements OnInit {

  rents = new Array<Rental>();

  constructor(private service:HistoryService) { }

  ngOnInit() {
    this.service.getHistory().subscribe(response => {
      console.log( 'response from get rentals : '+response.rentals);
      this.rents = response.rentals.map(item => 
        {
          return new Rental(
              item.car, 
              item.start_rental,
              item.end_rental,
              item.durations,
              item.price
          );
        });
    });
  }

}
