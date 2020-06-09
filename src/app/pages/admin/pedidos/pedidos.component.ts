import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/services/models/pedido-model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
  pedidoCargado:Pedido = new Pedido();

  constructor() { }

  ngOnInit() {
  }

}
