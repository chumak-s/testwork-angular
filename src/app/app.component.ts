import {Component, OnInit} from '@angular/core'
import {CurrentParamSort, User, UsersService} from './users.service'
import {sortBy} from 'lodash'

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
  currentParamSort: CurrentParamSort = {currentParam: 'name', asc: true}

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe(response => {
        this.users = [...response]
        this.filteredUsers = [...response]
        this.companiesList = this.getCompaniesList()
        this.sortTable(this.currentParamSort.currentParam)
      })
  }

  getCompaniesList(): string[]  {
    return this.users.map((user) => user.company.name)
  }

  onChangeCompany(selectedCompanies): void {
    this.filteredUsers = this.users.filter((user) => selectedCompanies.includes(user.company.name))
    if (this.currentParamSort.asc) {
      this.sortTable(this.currentParamSort.currentParam)
    } else {
      this.sortTable(this.currentParamSort.currentParam)
      this.filteredUsers = this.filteredUsers.reverse()
    }
  }

  onSort(currentParam): void {
    if (this.currentParamSort.currentParam === currentParam) {
          this.filteredUsers = this.filteredUsers.reverse()
          this.currentParamSort.asc = !this.currentParamSort.asc
        } else {
          this.sortTable(currentParam)
          this.currentParamSort.asc = true
        }
  }

  sortTable(currentParam): void {
      this.filteredUsers = sortBy(this.filteredUsers, [currentParam])
      this.currentParamSort.currentParam = currentParam
  }
}
