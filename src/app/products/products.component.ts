import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
<div class="container">
  <h3>Lexcorp contains Many products which start with Insurance <br>and Contain Many more</h3>
</div>
<div class="container">
<a href="#" class="btn btn-lg btn-secondary">Saving Plans</a><br>
<a routerLink="/healthinsu" routerLinkActive="active" class="btn btn-lg btn-secondary">Medical Insurance</a><br>
<a routerLink="/lifeinsu" routerLinkActive="active" class="btn btn-lg btn-secondary">Life Insurance</a><br>
<a routerLink="/vehicleinsu" routerLinkActive="active" class="btn btn-lg btn-secondary">Vehicle insurance</a><br>
<a href="#" class="btn btn-lg btn-secondary">Education Scheme</a><br>
<a href="#" class="btn btn-lg btn-secondary">Income Protection Insurance</a><br>
<a href="#" class="btn btn-lg btn-secondary">Property Insurance</a><br>
  `,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

  }

}
