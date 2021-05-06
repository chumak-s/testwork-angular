import {Component} from '@angular/core'
import {User} from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'testwork-angular'
  filteredCompanies: string[]
  users: User[] = []
  filteredUsers: User[] = []

  clonedUsers( users: User[]): void {
    this.users = [...users]

  }

  changeCompany(event): void {
    this.filteredCompanies = event

    const filtered: User[] = []

    this.users.map((user) => {
      if (this.filteredCompanies.includes(user.company.name)) {
        filtered.push(user)
      }
    })
    this.filteredUsers = filtered
  }
}
