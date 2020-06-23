import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './models/producto-model';

const APIURL= "http://localhost/appmin_server";

@Injectable({
  providedIn: 'root'
})

export class SProductosService {
  
  constructor(private HttpClient:HttpClient) { }
  
  getListaProductos(){
    return this.HttpClient.get<Producto[]>(APIURL+'/productos.php?funcion=get_productos');
  }

}
