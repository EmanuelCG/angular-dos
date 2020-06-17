import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.services';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public fecha: any;
  public newUser: any;
  public saveUser: any;

  constructor(
    private _PETICIONES: PeticionesService,
  ) {
    this.userId = 1; /*Inicializamos por defecto userId en 1  */
    this.newUser = {
      name: 'morpheus',
      job: 'zion resident'
    };
  }

  ngOnInit(): void {
    this.cargaUsuario();
    this.fecha = new Date(2019, 5, 20);
  }

  cargaUsuario() {
    this._PETICIONES.getUser(this.userId).subscribe( /*subscribe tiene 2 funciones CallBack result y error*/
      result => {
        this.user = result.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(form){
    this._PETICIONES.addUser(this.newUser).subscribe(
      response => {
        this.saveUser = response;
        form.reset();
      },
      error => {
        console.log(error);
      });
  }
}
