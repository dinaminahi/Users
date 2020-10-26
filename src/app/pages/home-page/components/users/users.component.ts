import { Component, Input, OnInit } from '@angular/core';
import { UserItem } from './users.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() public usersData: UserItem[];
  constructor() {}

  ngOnInit(): void {}
}
