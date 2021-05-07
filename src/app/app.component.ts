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
        this.getCompaniesList()
      })
  }

  getCompaniesList(): void  {
      this.users.map((user) => this.companiesList.push(user.company.name))
  }

  changeCompany(selectedCompanies): void {
    this.filteredUsers = this.users.filter((user) => selectedCompanies.includes(user.company.name))
  }
}
