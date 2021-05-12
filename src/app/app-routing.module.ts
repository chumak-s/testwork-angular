import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {UserPageComponent} from './user-page/user-page.component'
import {MainComponent} from './main/main.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import {UserNotFoundComponent} from './user-not-found/user-not-found.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'user/:id', component: UserPageComponent},
  {path: 'error404', component: PageNotFoundComponent},
  {path: 'error', component: UserNotFoundComponent},
  {path: '**', redirectTo: '/error404'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
