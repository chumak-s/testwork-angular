import { Component } from '@angular/core'
import {User} from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testwork-angular'
  companyList: string[] = []
  filteredCompanies: string[]


  filterCompanyUsers(usersClone: User[]): void {
    usersClone.map((item) => {
      if (this.companyList.includes(item.company.name)) {
        return
      } else {
        return this.companyList.push(item.company.name)
      }
    })
  }

  changeCompany(event): void {
    this.filteredCompanies = event
  }
}
