import { Car } from "./car";
import {User } from "./user" ;
export class Rent {
    constructor(
        public  car: Car[],
        public  start_rental: Date,
        public end_rental: Date,
        public price : number ,
        public user : User[]) {}
}