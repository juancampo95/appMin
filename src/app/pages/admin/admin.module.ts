import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';

//componentes
import { AdminComponent } from './admin.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DetalleComponent } from './pedidos/detalle/detalle.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidenavContentComponent,
    PedidosComponent,
    DetalleComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class AdminModule { }
