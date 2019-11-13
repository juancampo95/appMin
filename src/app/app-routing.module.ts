import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {path:"",redirectTo:"administracion",pathMatch:"full"},
  {path:"administracion",component:AdminComponent}
];

@NgModule({
  declarations:[
    AdminComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
