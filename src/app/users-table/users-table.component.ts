import { Component, OnInit } from '@angular/core'
import {User, UsersService} from '../users.service'

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  users: User[] = []

  constructor(private usersService: UsersService) { }

  ngOnInit(): any {

    this.usersService.getUsers()
      .subscribe(response => {
        this.users = response
        console.log(this.users)
      })
  }
}
