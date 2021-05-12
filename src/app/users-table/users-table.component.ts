import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core'
import {CurrentParamSort, HeadersList, User} from '../users.service'

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnChanges{

  @Input() filteredUsers: User[]
  @Input() currentParamSort: CurrentParamSort
  @Output() sortTable: EventEmitter<string> = new EventEmitter<string>()

  public pageNumber = 1
  public headersList: HeadersList[] = [
    {label: 'Name', value: 'name', col: 2},
    {label: 'Username', value: 'username', col: 3},
    {label: 'E-mail', value: 'email', col: 4},
    {label: 'Address', value: 'address.city', col: 5},
  ]

  ngOnChanges(changes: SimpleChanges): void {
   this.pageNumber = 1
  }

  onSort(currentParam: string): void {
    this.sortTable.emit(currentParam)
  }

  getUserAddress(user: User): string {
    return `${user.address.city}, ${user.address.street}, ${user.address.suite}`
  }

  iconCurrentParams(param: string): string {
    return param === this.currentParamSort.currentParam ? this.getIconCode() : ''
  }

  getIconCode(): string {
    return this.currentParamSort.asc ? '\u21E9' : '\u21E7'
  }
}
