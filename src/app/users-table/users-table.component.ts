import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core'
import {User, UsersService} from '../users.service'

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit, OnChanges{

  @Output() clonedUsers: EventEmitter<User[]> = new EventEmitter<User[]>()
  @Input() filteredUsers: User[]

  public pageNumber = 1
  public users: User[] = []

  constructor(private usersService: UsersService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.pageNumber = 1
  }

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe(response => {
        this.users = [...response]
        this.clonedUsers.emit(this.users)
      })
  }

  getUserAddress(user: User): string {
    return `${user.address.city}, ${user.address.street}, ${user.address.suite}`
  }
}
