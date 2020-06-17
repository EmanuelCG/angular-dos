import { Component } from '@angular/core';
import {Config} from './models/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dos';
  detalle: string;
  config;
  mostrarGames = true;
  ocultarGames(){
    this.mostrarGames = false;
  }

  constructor(){
    this.title = Config.titulo;
    this.detalle = Config.detalle;
    this.config = Config;
  }
}
