import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';


@Injectable()
export class UserGuardService implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    ) {}

    canActivate(): boolean {
      if (!this.authenticationService.isAuthenticated()) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }
}
