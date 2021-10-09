import { Car } from "./Car.model";

export class Rental {
    constructor(
        public car : Car,
        public start_rental : String,
        public end_rental : String,
        public durations : number,
        public price : number
    ){}
}