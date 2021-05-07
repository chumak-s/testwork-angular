import {Component, OnInit} from '@angular/core'
import {User, UsersService} from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  title = 'testwork-angular'
  users: User[] = []
  filteredUsers: User[] = []

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe(response => {
        this.users = [...response]
      })
  }

  changeCompany(selectedCompanies): void {

    const filtered: User[] = []

    this.users.map((user) => {
      if (selectedCompanies.includes(user.company.name)) {
        filtered.push(user)
      }
    })
    this.filteredUsers = filtered
  }
}
