import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../services/models/pedido-model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
  pedidoCargado:Pedido = new Pedido();
  constructor(){ 
    console.log(this.pedidoCargado);
  }

  ngOnInit() {
  }

}
