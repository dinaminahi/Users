import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserItem } from '../../../../shared/models/userItem.model';
@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserItemComponent {
  @Input() public user: UserItem;
}
