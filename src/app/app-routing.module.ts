import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';


const routes: Routes = [
  {
    path:"",redirectTo:"administracion",pathMatch:"full"
  },
  {
    path: `administracion`, loadChildren: () =>
      import('./pages/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  declarations:[
  ],
  imports: [
    RouterModule.forRoot(routes),
    MaterialModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
