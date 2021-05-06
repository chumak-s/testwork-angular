import {Component, Input, OnChanges, SimpleChanges} from '@angular/core'
import {User, UsersService} from '../users.service'

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnChanges{

  @Input() users: User[]
  @Input() filteredUsers: User[]

  public pageNumber = 1

  ngOnChanges(changes: SimpleChanges): void {
   this.pageNumber = 1
  }

  getUserAddress(user: User): string {
    return `${user.address.city}, ${user.address.street}, ${user.address.suite}`
  }
}
