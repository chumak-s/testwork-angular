import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {UserPageComponent} from './user-page/user-page.component'
import {MainComponent} from './main/main.component'

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'user/:id', component: UserPageComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
