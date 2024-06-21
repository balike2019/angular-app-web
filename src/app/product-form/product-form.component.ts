import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {

  constructor(private productService:ProductService){

  }
  ngOnInit(): void {
  }

    public saveProduct(data:Product){
      this.productService.saveProduct(data).subscribe(da=>console.log("Product save"));
    }
  }


