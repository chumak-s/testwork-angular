import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core'
import {User} from '../users.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnChanges{

  @Output() onChangeCompany: EventEmitter<string[]> = new EventEmitter<string[]>()
  @Input() users: User[]
  currentCompany: string
  companyList: string[] = []

  ngOnChanges(changes: SimpleChanges): void {
    this.getCompanyList(this.users)
  }

  getCompanyList( users: User[]): string[] {
    const companyList = []

    users.map((item) => {
      if (companyList.includes(item.company.name)) {
        return
      } else {
        return companyList.push(item.company.name)
      }
    })
    return companyList
  }

  onChangeSelect(event: Event): void {
    const value: string = (event.target as HTMLSelectElement).value
    if (value === 'Select company') {
      this.onChangeCompany.emit(this.companyList)
    } else {
      this.onChangeCompany.emit([this.currentCompany])
    }
  }
}
