import { Component, OnInit } from '@angular/core';
//services
import { SProductosService } from '../../../../../services/s-productos.service';
//models
import { Producto } from '../../../../../services/models/producto-model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss'],

})
export class ListaProductosComponent implements OnInit {

  listaFilter:any={nombre:''};
  listaDeProductos:Producto[]=[];
  filtrosDeComida=["HB","Salchipapa","Pizza","Perro","Maicito","Filete","Costilla","Sandwich","Adición"];
  
  constructor(private SProductos:SProductosService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }
  cargarProductos(){
    this.SProductos.getListaProductos().subscribe(productos=>{
      return this.listaDeProductos = productos;
    })
  }
  recalcularTotal(producto){
    producto.v_total = producto.v_unidad * producto.cantidad;
  }
  anadirProducto(product){
    // let validacion = this.productosAgregados.includes(product);
  }
  borrarProducto(product){
    console.log("elimino producto");
  }
  //filtro para botones rapidos
  filtrar(producto){
    if(this.listaFilter.nombre == producto ){
      this.listaFilter.nombre = "";
    }else{
      this.listaFilter.nombre = producto;
    }
  }
}
