import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from '../../../../../services/models/pedido-model';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})

export class FacturacionComponent implements OnInit {
  @Input() pedidoCargado:Pedido;

  //metodos de pago para el select
  metodosPago:object[]=[
    {value:"efectivo",name:'Efectivo'},
    {value:"datafono",name:'Datáfono'},
    {value:"online",name:'Online'}
  ]
  atendidoPor:object[]=[
    {value:"caja",name:'Caja'},
    {value:"Mesero 1",name:'Mesero 1'},
    {value:"Mesero 2",name:'Mesero 2'}
  ]
  columnasTabla:any=[
    "detalle","valor"
  ]
  columnasDetalle:any=[
    {detalle:"Subtotal",valor:"$"+0},
    {detalle:"Descuento",valor:"$"+0},
    {detalle:"Total",valor:"$"+0}
  ];

  constructor() { }

  ngOnInit() {
  }
  mostrar(){
    console.log(this.pedidoCargado);
  }
}
