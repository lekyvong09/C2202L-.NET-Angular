import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../models/IPagination';
import { Observable, map } from 'rxjs';
import { IBrand } from '../models/brand';
import { IType } from '../models/product-type';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(typeId?: number): Observable<IPagination | null> {
    let params = new HttpParams();

    if (typeId) {
      params = params.append('typeId', typeId.toString());
    }
    return this.http.get<IPagination>(this.baseUrl + 'products?pageSize=20', {params});
  }

  getBrands(): Observable<IBrand[]> {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes(): Observable<IType[]> {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/types');
  }
}
