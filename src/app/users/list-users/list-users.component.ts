import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../users.interface';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  public users: User[];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => {
      console.log(users);
      this.users = users;
    });
  }

}
