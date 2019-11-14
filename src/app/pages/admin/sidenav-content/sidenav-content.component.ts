import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
})
export class SidenavContentComponent implements OnInit {
  company_name:string ="Mi Salsa Casera";
  username:string ="Juan Camilo Campo"

  enlaces:object[]=[
    {name:"Pedidos actuales",ruta:"",icon:"fastfood"},
    {name:"Resumen de caja",ruta:"",icon:"store"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
