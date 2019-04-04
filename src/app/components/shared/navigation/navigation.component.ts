import { Component } from '@angular/core';
import {AuthenticationService, UserService } from '@services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  username: string;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    this.username = this.userService.getUserName();
    this.authenticationService.emitUserName.subscribe((name: string) => this.username = name);
  }

  logout = () => {
    console.log('logout');
    this.authenticationService.logout();
  }
}
