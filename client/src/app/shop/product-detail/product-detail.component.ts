import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';
import { IProduct } from 'src/app/models/product';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  faMinusCircle = faMinusCircle; faPlusCircle = faPlusCircle;

  product: IProduct | undefined;
  quantity = 1;

  constructor(private activatedRoute: ActivatedRoute, 
              private shopService: ShopService,
              private basketService: BasketService) {
  }

  ngOnInit(): void {
    this.loadProduct();
  }


  loadProduct() {
    this.shopService.getProductById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
      next: (p) => this.product = p,
      error: (err) => console.log(err)
    });
  }

  incrementQty() {
    this.quantity++;
  }

  decrementQty() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addItemToBasket() {
    if (this.product && this.quantity > 0) {
      this.basketService.addItemToBasket(this.product, this.quantity);
    }
  }
}
