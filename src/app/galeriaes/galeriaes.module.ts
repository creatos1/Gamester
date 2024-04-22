import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GaleriaesComponent } from './galeriaes.component'; // Importa el componente aquí
import { routes } from '../app.routes';


@NgModule({
  declarations: [
    GaleriaesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  exports: [
    GaleriaesComponent // Exporta el componente si deseas usarlo fuera de este módulo
  ]
})
export class GaleriaesModule { }
