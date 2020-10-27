import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserItem } from '../../../../shared/models/userItem.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  @Input() public usersData: UserItem[];
}
