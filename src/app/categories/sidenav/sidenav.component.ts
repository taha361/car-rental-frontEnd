import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CarsService } from '../../shared/cars.service';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
 formControl : FormControl;
 gearBox: string[] = ['Manual', 'Automatic'];
 Seats: string[] = ['2 seats', '4 seats'];
 panelColor = new FormControl('red');

 task: Task = {
  name: 'All Marks',
  completed: false,
  subtasks: [
    {name: 'BMW', completed: false},
    {name: 'Tesla', completed: false},
    {name: 'Ford', completed: false},
    {name: 'Honda', completed: false},
    {name: 'Toyota', completed: false}
  ]
};

allComplete: boolean = false;

constructor(private carService : CarsService){}

updateAllComplete(index : number) {
  this.task.subtasks[index].completed=!this.task.subtasks[index].completed;
 if (this.task.subtasks[index].completed)
  {
    this.carService.addMarkFilter(this.task.subtasks[index].name);
  }else
  {
    this.carService.deleteMarkFilter(this.task.subtasks[index].name);
  }
  this.allComplete = (this.task.subtasks != null) && this.task.subtasks.every(t => t.completed);
}

someComplete(): boolean {
  if (this.task.subtasks == null) {
    return false;
  }
  return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
}

setAll(completed: boolean) {
  this.allComplete = completed;
  if (this.task.subtasks == null) {
    return;
  }
  // this.carService.addAllMarkFilter();
  this.task.subtasks.forEach(t => t.completed = completed);
}

formatLabel(value: number) {
  if (value >= 1000) {
    return Math.round(value / 1000) + 'k';
  }

  return value;
}



dateFilter(event){
  this.carService.addAvailabilityFilter(event);
}

seatFilter(event)
{
  this.carService.addseatsFilter(event);
}
gearBoxFilter(event){
  console.log('radio change : '+event);
  
  // this.carService.addGearboxFilter(event);
}
priceFilter(event)
{
  this.carService.addPriceFilter(event);
}


ngOnInit()
{}

}
