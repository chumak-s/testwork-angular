import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

export interface Geo {
  lat: string
  lng: string
}

export interface Address {
  city: string
  geo: Geo
  street: string
  suite: string
  zipcode: string
}

export interface User {
  address: Address
  company: {
    bs: string
    catchPhrase: string
    name: string
  }
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
}
