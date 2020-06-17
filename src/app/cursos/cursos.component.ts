import { Component, OnInit } from '@angular/core';
import { Cursos } from '../models/cursos';

@Component({
    selector: 'app-cursos',
    templateUrl: './cursos.component.html'
})

export class CursosComponent implements OnInit {
    public Cursitos;
    constructor() {
        this.Cursitos = new Cursos('Angular X', 120, 400);
    }

    ngOnInit() {
        console.log(this.Cursitos);
    }

}
