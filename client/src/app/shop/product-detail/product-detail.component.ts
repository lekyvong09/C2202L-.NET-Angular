import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';
import { IProduct } from 'src/app/models/product';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  faMinusCircle = faMinusCircle; faPlusCircle = faPlusCircle;

  product: IProduct | undefined;

  constructor(private activatedRoute: ActivatedRoute, private shopService: ShopService) {
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
}
