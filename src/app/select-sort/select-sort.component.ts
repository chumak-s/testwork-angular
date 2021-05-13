import {Component, EventEmitter, Input, Output} from '@angular/core'
import {CurrentParamSort} from '../users.service'

@Component({
  selector: 'app-select-sort',
  templateUrl: './select-sort.component.html',
  styleUrls: ['./select-sort.component.scss']
})
export class SelectSortComponent {

  public selectedParam: string
  private _currentParamSort: CurrentParamSort
  @Output() selectParam: EventEmitter<CurrentParamSort> = new EventEmitter<CurrentParamSort>()
  @Input() set currentParamSort(value: CurrentParamSort){
    this._currentParamSort = {...value}
    if (this.currentParamSort.asc) {
      this.selectedParam = this.currentParamSort.currentParam
    } else {
      this.selectedParam = this.currentParamSort.currentParam + ' reverse'
    }
  }
  get currentParamSort(): CurrentParamSort {
    return this._currentParamSort
  }

  onChangeSelectParam(): void {
    const isIncludeField = ['name', 'username', 'email', 'address.city'].includes(this.selectedParam)
    if (isIncludeField) {
        this.currentParamSort = {asc: true, currentParam: this.selectedParam}
        this.selectParam.emit(this.currentParamSort)
    } else {
      const paramReverse = this.selectedParam.split(' ')[0]
      this.currentParamSort = {asc: false, currentParam: paramReverse}
      this.selectParam.emit(this.currentParamSort)
    }
  }
}
