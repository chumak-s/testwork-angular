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
        this.filteredUsers = this.getSortUsers(this.currentParamSort.currentParam, this.filteredUsers, this.currentParamSort.asc)
      })
  }

  getCompaniesList(): string[]  {
    return this.users.map((user) => user.company.name)
  }

  onChangeCompany(selectedCompanies: string[]): void {
    this.filteredUsers = this.users.filter((user) => selectedCompanies.includes(user.company.name))
    this.filteredUsers = this.getSortUsers(this.currentParamSort.currentParam, this.filteredUsers, this.currentParamSort.asc)
  }

  onSort(currentParamSort: CurrentParamSort): void {
    this.currentParamSort = {currentParam: currentParamSort.currentParam, asc: currentParamSort.asc}
    this.filteredUsers = this.getSortUsers(currentParamSort.currentParam, this.filteredUsers, currentParamSort.asc)
  }

  getSortUsers(currentParam: string, users: User[], asc?: boolean): User [] {
    const sortUsers: User[] = sortBy(users, [currentParam])
    this.currentParamSort = {...this.currentParamSort, currentParam}
    return asc ? sortUsers : sortUsers.reverse()
  }

  onChangeSelectParams(currentParamSort): void {
    this.currentParamSort = {asc: currentParamSort.asc, currentParam: currentParamSort.currentParam}
    this.filteredUsers = this.getSortUsers(this.currentParamSort.currentParam, this.filteredUsers, this.currentParamSort.asc)
  }
}
