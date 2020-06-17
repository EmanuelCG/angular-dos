import { Pipe, PipeTransform} from '@angular/core';

@Pipe({ /* Con el decorador @Pipe creamos nuestra Pipe*/
    name: 'calculadora'

})

export class CalculadoraPipe implements PipeTransform{

    /* Al metodo transform debemos pasar Dato 1| Dato 2 | */
   transform(value: any, valueTwo: any){
        const operaciones = `
            Suma: ${value + valueTwo} |
            Resta: ${value - valueTwo}
        `;
        return operaciones;
   }
}
