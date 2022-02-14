import { Component,  Output,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent{

  @Input product: Product| undefined;
  @Output notify=new EventEmitter();
  constructor() { }
}