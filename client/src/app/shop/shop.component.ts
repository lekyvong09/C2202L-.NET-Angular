import { Component, OnInit } from '@angular/core';
import { IPagination } from '../models/IPagination';
import { ShopService } from './shop.service';
import { faRefresh, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  faRefresh = faRefresh; faSearch = faSearch;
  products: any[] = [];
  
  constructor(private shopService: ShopService) {
  }

  ngOnInit(): void {
    this.callApi();
  }

  callApi() {
    this.shopService.getProducts().subscribe({
      next: (response: IPagination) => {
        console.log(response);
        this.products = response.data;
      }, 
      error: (err) => console.log(err)
    });
  }
}
