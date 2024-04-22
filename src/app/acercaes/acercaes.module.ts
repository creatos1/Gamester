import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AcercaesComponent } from './acercaes.component'; // Importa el componente aquí
import { routes } from '../app.routes';


@NgModule({
  declarations: [AcercaesComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  exports :[
    AcercaesComponent
  ],
})
export class AcercaesModule { }
