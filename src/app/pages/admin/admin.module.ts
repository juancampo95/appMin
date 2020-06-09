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
import { TablaProductosComponent } from './pedidos/detalle/tabla-productos/tabla-productos.component';
import { FacturacionComponent } from './pedidos/detalle/facturacion/facturacion.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidenavContentComponent,
    PedidosComponent,
    DetalleComponent,
    TablaProductosComponent,
    FacturacionComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class AdminModule { }
