export class ContactoUsuario {

    public arrayMesagge: Array<ContactoUsuario>;
    public arrayContacto;
    constructor(
        public name: string,
        public email: string,
        public message: string
    ){
    }

    getContactos(){
        return this.arrayMesagge;
    }
}
