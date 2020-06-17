import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { routing, appRoutingProviders } from './app.routing'; /*Rutas blancas*/
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {VideojuegoComponent} from './videojuego/videojuego.component';
import {ShoesComponent} from './shoes/shoes.component';
import { CursosComponent } from './cursos/cursos.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import {HttpClientModule} from '@angular/common/http'; /*Lo utilizamos para realizar las peticiones Ajax*/
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { FormularioComponent } from './formulario/formulario.component';
/*Decorador*/
@NgModule({
  /* Cargar componentes*/
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ShoesComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    FormularioComponent
  ],
  /* Modulos dr Angular o crados por nosotros*/
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ], /* Cargar servicios*/
  bootstrap: [AppComponent]
})
export class AppModule { }
