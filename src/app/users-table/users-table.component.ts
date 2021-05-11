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
    {label: 'Name', value: 'name'},
    {label: 'Username', value: 'username'},
    {label: 'E-mail', value: 'email'},
    {label: 'Address', value: 'address.city'},
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

  iconCurrentParams(param): string {
    if (param === this.currentParamSort.currentParam) {
      return this.getIconCode()
    } else {
      return ''
    }
  }

  getIconCode(): string {
    if (this.currentParamSort.asc) {
      return '\u21E9'
    } else {
      return '\u21E7'
    }
  }
}
