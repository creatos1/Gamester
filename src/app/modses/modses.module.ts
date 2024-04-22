import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ModsesComponent } from './modses.component'; // Importa el componente aquí
import { routes } from '../app.routes';
@NgModule({
  declarations: [
    ModsesComponent // Declara el componente aquí
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  exports: [
    ModsesComponent // Exporta el componente si deseas usarlo fuera de este módulo
  ]
})
export class ModsesModule { }
