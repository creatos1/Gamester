import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component'; // Importa el componente de inicio

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {EsComponent} from './es/es.component'

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'homees', component: EsComponent }, // Ruta para la página de inicio
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }, // Redirige a '/inicio' cuando no se encuentra ninguna ruta
];
