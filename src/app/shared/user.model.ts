import { Rental } from "./rental.model";

export class User {
    public password :string;
    constructor(
        public username :string,
        public firstname :string,
        public lastname : string,
        public phone :string,
        public address : string,
        public email : string,
        public admin : boolean,
        public rentals : Rental[] = [],
        
        public token : string

    ){}
}
