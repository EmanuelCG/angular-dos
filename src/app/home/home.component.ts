import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent{
    public title = 'Estamos en Home';
    public identificado: boolean;
    constructor(){
        this.identificado = false;
        console.log(this.title);
    }

    setIdentificado(){
        this.identificado = true;
    }

    unsetIdentificado(){
        this.identificado = false;
    }
}
