import { Component } from '@angular/core';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { BasketService } from '../basket/basket.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  faCartShopping = faCartShopping;

  constructor(public basketService: BasketService) { }

}
