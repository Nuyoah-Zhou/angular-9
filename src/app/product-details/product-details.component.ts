import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product21:Product|undefined;

  constructor(private route:ActivatedRoute) { }

  // ngOnInit() {
    
  //   const routeParams = this.route.snapshot.paramMap;
  //   const productid=Number(routeParams.get('productId'))
  //   this.product=products.find(t=>t.id==productid)
  // }
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    this.product21 = products.find(product => product.id === productIdFromRoute);
  }

}