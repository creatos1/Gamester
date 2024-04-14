import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component'; // Importa el componente de inicio
import { EsComponent } from './es/es.component'; // Importa el componente EsComponent

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'homees', component: EsComponent }, // Ruta para la página de inicio en español
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }, // Redirige a '/inicio' cuando no se encuentra ninguna ruta
];
