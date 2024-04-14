import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner'; // Importa NgxSpinnerModule
import { EsComponent } from '../app/es/es.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    RouterModule.forRoot([]) // Agrega el módulo de enrutamiento con rutas vacías
  ],
  providers: [],
  bootstrap: [] // No se especifica ningún componente para arrancar la aplicación aquí
})
export class AppModule { }
