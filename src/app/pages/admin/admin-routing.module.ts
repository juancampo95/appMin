import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [
  {
    path:'', component:AdminComponent,children:[
      {path:'',redirectTo:'pedidos',pathMatch:'full'},
      {path:'pedidos',component:PedidosComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
