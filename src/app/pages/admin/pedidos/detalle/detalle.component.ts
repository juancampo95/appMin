import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from '../../../../services/models/pedido-model';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  @Input() pedidoCargado:Pedido; /*trae los datos del pedido cargado*/
  
  constructor() {
  }

  ngOnInit() {
    console.log(this.pedidoCargado);
  }
// método para sumar y restar número de mesa.
  modificarMesa(pedido,accion){
    if(pedido.mesa>=1 && accion=="restar"){
      pedido.mesa--;
      console.log("numero "+pedido.mesa);
    }else if(pedido.mesa>=0 && accion=="sumar"){
      pedido.mesa++;
      console.log("numero "+pedido.mesa);
    }
  }

}
