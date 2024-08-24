import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TempStorageService {

  constructor(private router: Router, private storageService: StorageService) { }

  setStorage(params){
    this.storageService.secureStorage.setItem('prozoneSession', JSON.stringify(params));
  }

  getStorage(){
    let resultData = null;
    let data = this.storageService.secureStorage.getItem('prozoneSession');
    if(data){
      resultData = JSON.parse(data);
    }
    return resultData;
  }

  clearStorage(){
    this.storageService.secureStorage.removeItem('prozoneSession');
    this.router.navigate(['/login']);
  }

  setProductStorage(params){
    let product = this.getProductStorage();
    if(product){
      params.quantity = product.quantity + params.quantity;
    }
    this.storageService.secureStorage.setItem('products', JSON.stringify(params));
  }

  setCheckoutProductStorage(params){
    let product = this.getProductStorage();
    if(product){
      params.quantity = params.quantity;
    }
    this.storageService.secureStorage.setItem('products', JSON.stringify(params));
  }

  getProductStorage(){
    let resultData = null;
    let data = this.storageService.secureStorage.getItem('products');
    if(data){
      resultData = JSON.parse(data);
    }
    return resultData;
  }

  clearProductStorage(){
    this.storageService.secureStorage.removeItem('products');
  }
}
