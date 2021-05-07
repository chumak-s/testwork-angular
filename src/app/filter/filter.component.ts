import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Output() onChangeCompany: EventEmitter<string[]> = new EventEmitter<string[]>()
  @Input() companiesList: string[]
  @ViewChild('mySelect') selectRef: ElementRef
  currentCompany: string

  onChangeSelect(event: Event): void {
    const value: string = (event.target as HTMLSelectElement).value
    if (value === 'Select company') {
      this.onChangeCompany.emit(this.companiesList)
    } else {
      this.onChangeCompany.emit([this.currentCompany])
    }
  }

  resetSelect(): void {
    if (this.selectRef.nativeElement.value === 'Select company') {
      return
    }
    this.selectRef.nativeElement.value = 'Select company'
    this.selectRef.nativeElement.dispatchEvent(new Event('change'))
  }
}
