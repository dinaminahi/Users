import { Component, Input, OnInit } from '@angular/core';
import { UserItem } from './../users/users.model';
@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() public user: UserItem;

  constructor() {}

  ngOnInit(): void {}
}
