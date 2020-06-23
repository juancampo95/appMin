import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//componentes
import { AppComponent } from './app.component';

//servicios
import { SProductosService } from './services/s-productos.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],
  providers: [
    SProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
