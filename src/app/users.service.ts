import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

export interface Todos {
  id: number
  completed: boolean
  title: string
  userId: number
}

export interface HeadersList {
  label: string
  value: string
  col: number
}

export interface CurrentParamSort {
  currentParam: string
  asc: boolean
}

interface Geo {
  lat: string
  lng: string
}

interface Address {
  city: string
  geo: Geo
  street: string
  suite: string
  zipcode: string
}

interface Company {
  bs: string
  catchPhrase: string
  name: string
}

export interface User {
  address: Address
  company: Company
  email: string
  id: number
  name: string
  phone: number
  username: string
  website: string
}

@Injectable({providedIn: 'root'})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  getUser(id: number): Observable<User[]> {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users?id=${id}`)
  }

  getTodosUser(id: number): Observable<Todos[]> {
    return this.http.get<Todos[]>(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
  }
}
