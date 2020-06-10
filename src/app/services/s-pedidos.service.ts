import { Injectable } from '@angular/core';
import { Pedido } from './models/pedido-model';

@Injectable({
  providedIn: 'root'
})
export class SPedidosService {
  public pedidos:Pedido[]=[];
  constructor() { }
}
