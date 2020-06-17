import { Component, OnInit} from '@angular/core';
import { ContactoUsuario} from '../models/usuario';
@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html'
})

export class FormularioComponent implements OnInit{
    public usuario: ContactoUsuario;
    constructor(

    ){
        this.usuario = new ContactoUsuario('', '', '');
    }

    ngOnInit(){

    }

    onSubmit(form){
        if (this.usuario){
            console.log(this.usuario);
        }
        form.reset();
    }
}
