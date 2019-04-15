import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserService } from '@services';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$: Observable<{}> = of([]);

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getAllUsers();
  }

}
