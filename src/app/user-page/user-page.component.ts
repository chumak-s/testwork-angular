import { Component, OnInit } from '@angular/core'
import {ActivatedRoute, Params} from '@angular/router'
import {Todos, User, UsersService} from '../users.service'

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  public user: User[]
  public todos: Todos[] = []
  public userId: number

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.usersService.getUser(+params.id).subscribe((response) => this.user = [...response])
      this.userId = +params.id
    })
  }

  getFullAddress(user: User): string {
    return `${user.address.city}, ${user.address.street}, ${user.address.suite}`
  }
}
