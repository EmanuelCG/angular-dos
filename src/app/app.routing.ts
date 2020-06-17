/*importar modulos del router de Angular */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*Importar componentes*/

import { ShoesComponent } from './shoes/shoes.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent} from './externo/externo.component';
import { FormularioComponent} from './formulario/formulario.component';
/*Array de rutas*/

const appRoutes: Routes = [
    { path: 'Shoes', component: ShoesComponent },
    { path: 'Shoes/:nombre', component: ShoesComponent }, /* Colocamos el parametro :nombre*/
    { path: 'Games', component: VideojuegoComponent },
    { path: 'Home', component: HomeComponent},
    { path: 'Cursos', component: CursosComponent},
    { path: 'Externo', component: ExternoComponent},
    { path: 'Formulario', component: FormularioComponent}
];

/*Exportar modulo del Router*/

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
