import { Injectable } from '@angular/core';
import { Producto } from './models/producto-model';

@Injectable({
  providedIn: 'root'
})
export class SProductosService {
  public productos:Producto[]=[
    { id:3,
      nombre:"salchipapa",
      descripcion:"con carne",
      cantidad:1,
      v_unidad:1,
      v_total:1,
      foto:"img",
      anadido:"0",
      tipo:"comida"
    }
  ]
  constructor() { }
}
