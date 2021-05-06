import {Component, EventEmitter, Input, Output} from '@angular/core'
import {User} from '../users.service'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Output() onChangeCompany: EventEmitter<string[]> = new EventEmitter<string[]>()
  @Input() users: User[]
  currentCompany: string

  onChangeSelect(event: Event): void {
    const value: string = (event.target as HTMLSelectElement).value
    if (value === 'Select company') {
      this.onChangeCompany.emit([])
    } else {
      this.onChangeCompany.emit([this.currentCompany])
    }
  }
}
