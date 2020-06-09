import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss'],
})
export class TablaProductosComponent implements OnInit {
  displayedColumns:any=['cantidad','producto','valor_unidad','total','eliminar'];
  productosAgregados:any=[
    {cantidad: 2, producto: 'Salchipapa tocineta personal', valor_unidad: 1.0079, total: 'H'},
    {cantidad: 2, producto: 'Salchipapa tocineta personal', valor_unidad: 1.0079, total: 'H'},
    {cantidad: 2, producto: 'Salchipapa tocineta personal', valor_unidad: 1.0079, total: 'H'},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
