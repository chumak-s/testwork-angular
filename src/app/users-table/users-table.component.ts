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
  @Output() sortTable: EventEmitter<CurrentParamSort> = new EventEmitter<CurrentParamSort>()

  public pageNumber = 1
  public headersList: HeadersList[] = [
    {label: 'Name', value: 'name', className: 'col-20'},
    {label: 'Username', value: 'username', className: 'col-15'},
    {label: 'E-mail', value: 'email', className: 'col-25'},
    {label: 'Address', value: 'address.city', className: 'col-25'},
  ]

  ngOnChanges(changes: SimpleChanges): void {
   this.pageNumber = 1
  }

  onSort(currentParam: string): void {
    if (this.currentParamSort.currentParam === currentParam) {
      this.currentParamSort = {...this.currentParamSort, asc: !this.currentParamSort.asc}
    } else {
      this.currentParamSort = {currentParam, asc: true}
    }
    this.sortTable.emit(this.currentParamSort)
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
