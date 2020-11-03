import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApipageComponent } from './apipage/apipage.component';

const routes: Routes = [
  {path:"",component:ApipageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
