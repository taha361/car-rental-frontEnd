import { User } from "./user";
export class Car {
    constructor(
    public model: String,
    public registration: String,
    public  imgPath: String,
    public description : String ,
    public mark : String ,
    public society: String,
    public gearbox: String,
    public speed: number,
    public seats : number ,
    public city : String ,
    public location : String,
    public  Price : number,
    public likes : [{
        nb :{
            type : Number ,
        },
        client: User
    }],

    public booking :[{ 
        date_debut : Date,
        date_fin : Date 
    }]
    ) {}


}