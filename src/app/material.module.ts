import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule,
  MatIconModule,
  MatTableModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

const materialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule,
  MatIconModule,
  MatTableModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule
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
