import { Component, OnInit } from '@angular/core'
import {CurrentParamSort, User, UsersService} from '../users.service'
import {sortBy} from 'lodash'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

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
        this.filteredUsers = this.getSortUsers(this.currentParamSort.currentParam)
      })
  }

  getCompaniesList(): string[]  {
    return this.users.map((user) => user.company.name)
  }

  onChangeCompany(selectedCompanies: string[]): void {
    this.filteredUsers = this.users.filter((user) => selectedCompanies.includes(user.company.name))
    if (this.currentParamSort.asc) {
      this.filteredUsers = this.getSortUsers(this.currentParamSort.currentParam)
    } else {
      this.filteredUsers = this.getSortUsers(this.currentParamSort.currentParam)
      this.filteredUsers = [...this.filteredUsers.reverse()]
    }
  }

  onSort(currentParam: string): void {
    if (this.currentParamSort.currentParam === currentParam) {
      this.filteredUsers = [...this.filteredUsers.reverse()]
      this.currentParamSort = {...this.currentParamSort, asc: !this.currentParamSort.asc}
    } else {
      this.filteredUsers = this.getSortUsers(currentParam)
      this.currentParamSort = {...this.currentParamSort, asc: true}
    }
  }

  getSortUsers(currentParam: string): User [] {
    const sortUsers: User[] = sortBy(this.filteredUsers, [currentParam])
    this.currentParamSort = {...this.currentParamSort, currentParam}
    return sortUsers
  }
}
