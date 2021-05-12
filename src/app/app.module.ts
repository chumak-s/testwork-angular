import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {UsersTableComponent} from './users-table/users-table.component'
import {HttpClientModule} from '@angular/common/http'
import {NgxPaginationModule} from 'ngx-pagination'
import {FilterComponent} from './filter/filter.component'
import {FormsModule} from '@angular/forms'
import { UserPageComponent } from './user-page/user-page.component'
import { MainComponent } from './main/main.component'
import { TodosUsersComponent } from './todos-users/todos-users.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { UserNotFoundComponent } from './user-not-found/user-not-found.component'
import { SelectSortComponent } from './select-sort/select-sort.component'

@NgModule({
    declarations: [
        AppComponent,
        UsersTableComponent,
        FilterComponent,
        UserPageComponent,
        MainComponent,
        TodosUsersComponent,
        PageNotFoundComponent,
        UserNotFoundComponent,
        SelectSortComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
