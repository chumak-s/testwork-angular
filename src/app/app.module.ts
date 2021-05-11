import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {UsersTableComponent} from './users-table/users-table.component'
import {HttpClientModule} from '@angular/common/http'
import {NgxPaginationModule} from 'ngx-pagination'
import {FilterComponent} from './filter/filter.component'
import {FormsModule} from '@angular/forms'

@NgModule({
    declarations: [
        AppComponent,
        UsersTableComponent,
        FilterComponent,
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
