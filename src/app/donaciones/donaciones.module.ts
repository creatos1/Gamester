import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DonacionesComponent } from './donaciones.component'; // Importa el componente aquí
import { routes } from '../app.routes';
@NgModule({
  declarations: [
    DonacionesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DonacionesComponent // Exporta el componente si deseas usarlo fuera de este módulo
  ]
})
export class DonacionesModule { }
