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
  companiesList: string[] = []

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe(response => {
        this.users = [...response]
        this.filteredUsers = [...response]
        this.companiesList = this.getCompaniesList()

      })
  }

  getCompaniesList(): string[]  {
    return this.users.map((user) => user.company.name)
  }

  onChangeCompany(selectedCompanies): void {
    this.filteredUsers = this.users.filter((user) => selectedCompanies.includes(user.company.name))
  }
}
