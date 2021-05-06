import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() onChangeCompany: EventEmitter<string[]> = new EventEmitter<string[]>()
  @Input() companyList: string[] = []
  currentCompany: string

  constructor(
  ) {}

  ngOnInit(): void {
  }

  onChangeSelect(event): void {
    const value: string = event.target.value
    if (value === 'Select company') {
      this.onChangeCompany.emit(this.companyList)
    } else {
      this.onChangeCompany.emit([this.currentCompany])
    }
  }
}
