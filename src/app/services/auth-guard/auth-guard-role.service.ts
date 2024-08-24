import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardRoleService {

  constructor(private router: Router, private storageService: StorageService) { }

  canActivate(){
    let user = this.storageService.secureStorage.getItem('prozoneSession');
    if(user){
      user = JSON.parse(user);
    }
    if(user && user.role == 'admin'){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
