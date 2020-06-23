import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/services/models/producto-model';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.scss'],
})
export class TablaProductosComponent implements OnInit {
  displayedColumns:any=['cantidad','producto','valor_unidad','total','eliminar'];
  @Input() productosAgregados;
  
  constructor() { }

  ngOnInit() {
  }

}
