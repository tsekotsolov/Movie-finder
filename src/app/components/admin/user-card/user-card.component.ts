import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '@services';
import { IUser } from '../../../core/models/index';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: IUser;
  isBanned: boolean;
  avatar = 'https://res.cloudinary.com/tsekotsolov/image/upload/v1532975416/band/no_avatar.png';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user._kmd.status
      ? this.isBanned = true
      : this.isBanned = false;
    }

  banUser = (id: string) => {
    this.userService.banUser(id).subscribe((data: any) => console.log(data));
    this.isBanned = true;
  }

  restoreUser = (id: string) => {
    this.userService.restoreUser(id).subscribe((data: any) => console.log(data));
    this.isBanned = false;
  }
}
