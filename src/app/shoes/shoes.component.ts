import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; /*importamos estas clases para pasar parametors por la Url*/
import {Shoes} from '../models/shoes';
import { ShoesService} from '../services/shoes.services';
@Component({
    selector: 'app-shoes',
    templateUrl: './shoes.component.html',
    providers: [ShoesService] /* En providers pasamos los servicios*/
})

export class ShoesComponent implements OnInit{
    public title = 'Colección Shoes';
    public marcas: string [];
    public color: string;
    public miMarca: string;
    public nombre: string;
    public shoes: Array<Shoes>;

    constructor(
        /*Inyectamos las propiedades ActivatedRoute y Router*/
        private _ROUTE: ActivatedRoute,
        private _ROUTER: Router, /*Objeto Router*/
        /* Pasando el Servicio de Shoes*/
        private _SHOESERVICE: ShoesService
    ){
        this.marcas = new Array();
    }

    ngOnInit(){
        this._ROUTE.params.subscribe((params: Params) => {
            this.nombre = params.nombre; /*"nombre" es el nombre del parametro que colocamos en app.routing*/
            console.log(this.nombre);
            if (this.nombre === 'ninguno') {
                this._ROUTER.navigate(['/Home']);
            }
        });
        this.shoes = this._SHOESERVICE.getShoes();
        this.getMarcas();
        console.log(this.shoes);
    }

    getMarcas(){
        this.shoes.forEach((value, index) => {
            /*Con en metodo push añadimos los objetos a nuestro array*/
            if (this.marcas.indexOf(value.marca) < 0){
                this.marcas.push(value.marca);
            }
        });
        console.log(this.marcas);
    }

    getMarca(){
        alert(this.miMarca);
    }

    addMarca(){
        this.marcas.push(this.miMarca);
    }

    dropMarca(index){
        /*delete this.marcas[index];*/
        this.marcas.splice(index, 1);
    }

    redirigir(){
        this._ROUTER.navigate(['/Games']);
    }
}
