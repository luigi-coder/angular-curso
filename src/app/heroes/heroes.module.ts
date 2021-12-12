import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    /* Mis componentes */
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    /* Que cosa quiero que sean
    visibles */
    exports: [
        ListadoComponent
    ],
    /* Van solo modulos */
    imports: [
        /* Nos ofrece trabajar con las directivas 
        como *ngIf p *ngFor */
        CommonModule
    ]
})
export class HeroesModule {

}