import {Component, Input, OnInit} from '@angular/core'
import {Todos, UsersService} from '../users.service'

@Component({
  selector: 'app-todos-users',
  templateUrl: './todos-users.component.html',
  styleUrls: ['./todos-users.component.scss']
})
export class TodosUsersComponent implements OnInit {

  @Input() userId: number
  todos: Todos[]

  constructor( private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getTodosUser(this.userId).subscribe(response => {
      this.todos = [...response]
      this.todos = this.sortTaskCompleted(this.todos)
    })
  }

  sortTaskCompleted(todos: Todos[]): Todos[] {
    return todos.sort((a, b) => a.completed > b.completed ? 1 : -1)
  }
}
