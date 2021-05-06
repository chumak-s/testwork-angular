import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core'
import {User, UsersService} from '../users.service'

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit, OnChanges {

  @Output() usersClone: EventEmitter<User[]> = new EventEmitter<User[]>()
  @Input() filteredCompanies: string[]

  public users: User[] = []
  public filteredUsers: User[]
  public pageNumber = 1

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe(response => {
        this.users = [...response]
        this.usersClone.emit(this.users)
      })
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.usersFilter(this.filteredCompanies)
  }

  getUserAddress(user: User): string {
    return `${user.address.city}, ${user.address.street}, ${user.address.suite}`
  }

  usersFilter(filteredCompanies: string[]): void {
    const filtered: User[] = []

    this.users.map((user) => {
      if (filteredCompanies.includes(user.company.name)) {
        filtered.push(user)
      }
    })
    this.filteredUsers = filtered
    this.pageNumber = 1
    console.log(this.filteredUsers)
  }
}
