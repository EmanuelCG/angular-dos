import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; /*Estos modulos permiten hacer petciones Ajax y modificar sus cabeceras*/
import { Observable } from 'rxjs';

@Injectable()
export class PeticionesService {
    public url: string;
    constructor(
        public _HTTP: HttpClient
    ) {
        this.url = 'https://reqres.in/';
    }

    getUser(userId): Observable<any> {
        return this._HTTP.get(this.url + 'api/users/' + userId);
    }

    addUser(user): Observable<any>{
        const params = JSON.stringify(user); /* Transformamos un objeto a String JSON (JSON.stringify(valor))*/
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._HTTP.post(this.url + 'api/users', params, {headers});
    }
}

