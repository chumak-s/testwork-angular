import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core'
import {CurrentParamSort} from '../users.service'

@Component({
  selector: 'app-select-sort',
  templateUrl: './select-sort.component.html',
  styleUrls: ['./select-sort.component.scss']
})
export class SelectSortComponent implements OnChanges {

  @Output() selectParam: EventEmitter<CurrentParamSort> = new EventEmitter<CurrentParamSort>()
  @Input() currentParamSort: CurrentParamSort
  selectedParam: string

  ngOnChanges(changes: SimpleChanges): void {
    if (this.currentParamSort.asc) {
      this.selectedParam = this.currentParamSort.currentParam
    } else {
      this.selectedParam = this.currentParamSort.currentParam + ' reverse'
    }
  }

  onChangeSelectParam(): void {
    if (this.selectedParam === 'name'
      || this.selectedParam ===  'username'
      || this.selectedParam ===  'email'
      || this.selectedParam ===  'address.city') {
        this.currentParamSort = {asc: true, currentParam: this.selectedParam}
        this.selectParam.emit(this.currentParamSort)
    } else {
      const paramReverse = this.selectedParam.split(' ')[0]
      this.currentParamSort = {asc: false, currentParam: paramReverse}
      this.selectParam.emit(this.currentParamSort)
    }
  }
}
