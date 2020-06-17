import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
    selector: 'app-videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor() {
        this.titulo = 'Componente de videojuego';
        this.listado = 'Listado de los juegos mas populares';
        console.log('Se cargo el componente videojuego');
    }

    ngOnInit(){
        /*console.log('OnInit iniciado');*/
    }

    ngDoCheck(){
        /*console.log('DoChek Ejecutado');*/
    }

    ngOnDestroy(){
        /*console.log('OnDestroy ejecutado');*/
    }

    cambiarTitulo(){
        this.titulo = 'New titulo X';
    }
}
