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

  banUser = (id: string) => {
    this.userService.banUser(id).subscribe((data: any) => console.log(data));
  }

  restoreUser = (id: string) => {
    console.log(id);
    this.userService.restoreUser(id).subscribe((data: any) => console.log(data));
  }


}
