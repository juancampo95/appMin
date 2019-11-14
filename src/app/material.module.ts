import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule,
  MatIconModule
} from '@angular/material';

const materialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule,
  MatIconModule
]


@NgModule({
  imports:
  [
    materialComponents
  ],
  exports:
  [
    materialComponents
  ]
})
export class MaterialModule { }
