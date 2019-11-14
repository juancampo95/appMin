import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';

//componentes
import { AdminComponent } from './admin.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidenavContentComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class AdminModule { }
