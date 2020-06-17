import { Injectable } from '@angular/core';
import { Shoes } from '../models/shoes';

@Injectable() /*Es un decorador que permite instanciar de forma directa las varialbes de la clase sin necesidad de crear un nuevo objeto*/
export class ShoesService{
    public shoes: Array <Shoes>;

    constructor(){
        this.shoes = [
            new Shoes('T50', 'Negro', 50, 'Rebook', true),
            new Shoes('Classic', 'Blanco', 120, 'Nike', true),
            new Shoes('Pro', 'Rojo', 320, 'Adidas', false),
            new Shoes('Yezzy', 'Gris', 520, 'Adidas', false)
        ];
    }

    getTexto(){
        return 'Get del Servicio';
    }

    getShoes(): Array<Shoes>{
        return this.shoes;
    }
}
