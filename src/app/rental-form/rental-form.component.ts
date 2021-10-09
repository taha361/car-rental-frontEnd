import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html',
  styleUrls: ['./rental-form.component.css']
})
export class RentalFormComponent implements OnInit {
  imgPath :string;
  start_rental : Date ;
  end_rental : Date;
  durations : string;
  model : string;
  price : number;
  sessionId ;


  constructor(private route : ActivatedRoute,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document) { }

  ngOnInit(): void {
    this.route.data.subscribe((data : Data) => {
      this.imgPath = data['service'].car.imgPath;
      this.start_rental = data['service'].start_rental;
      this.end_rental = data['service'].end_rental;
      this.durations = data['service'].durations;
      this.model = data['service'].car.model;
      this.price = data['service'].price;
      this.sessionId = data['service'].sessionId;
      console.log(this.sessionId);
      
    })
      const s = this.renderer2.createElement('script');
      s.onload = this.loadNextScript.bind(this);
      s.src = 'https://js.stripe.com/v3/'; // Defines someGlobalObject
      this.renderer2.appendChild(this._document.body, s);
  }
   
   loadNextScript() {
      const s = this.renderer2.createElement('script');
      s.text = `var stripe = Stripe('pk_test_51IuQbSCxbz7I0xpYRnDxcadxGC0120u6UiIkFY2TLKtO2HXd6ucGjlhh4b48T0HjyLYSNA9BM8uLvN95WATgsgBE00ep7GbZcX');
      var orderBtn = document.getElementById('order-btn');
      var inputSession = document.getElementById('sessionId');
      orderBtn.addEventListener('click',function(){
        console.log('script not existe');
          stripe.redirectToCheckout({
              sessionId : '${this.sessionId}'
          })
      })
   `
      this.renderer2.appendChild(this._document.body, s);
   

  }

}
