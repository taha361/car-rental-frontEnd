export class Car {
    public _id: string;
    public booking : [{date_debut : string,date_fin : string}];
    public likes : {nb : number,clients : []}={nb : 0,clients : []};
    constructor(
        public model : string,
        public registration : string,
        public imgPath : string,
        public description : string,
        public mark : string,
        public society : string,
        public gearbox : string,
        public speed : number,
        public seats : number,
        public city : string,
        public location : string,
        public price : number
    ){}

}