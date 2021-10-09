import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rental } from "../shared/rental.model";
import { Car } from '../shared/Car.model';

@Injectable({
  providedIn: 'root'
})

export class HistoryService {
  private url: string = 'http://localhost:5000/rent/get';
  constructor(private httpClient: HttpClient) { }
  
  public getHistory(): Observable<{rentals : Rental[]}>{
    return this.httpClient.get<{rentals : Rental[]}>(this.url,
      {headers : new HttpHeaders().append('Content-Type','application/json')});
  }
}


