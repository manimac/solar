import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private storageService: StorageService) { }

  canActivate(){
    let user = this.storageService.secureStorage.getItem('prozoneSession');
    if(user){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
