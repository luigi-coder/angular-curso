import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

// OnInit - es un ciclo de vida
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes:string[] = [
      'Spiderman',
      'Ironman',
      'Hulk',
      'Thor',
      'Capitán america'
  ]
  heroeBorrado:string = '';
  array:string[] = [];
  array2:string[] = [];
  tema:string = 'Tema *ngIf';

  // hacer un array distinto 
  borraHeroe(){
    
    this.heroeBorrado = this.heroes.shift() || ''
    this.array.push(this.heroeBorrado);
  }

  borrarTodo(){
    this.heroes = [];
    this.array2 = [
      'Spiderman',
      'Ironman',
      'Hulk',
      'Thor',
      'Capitán america'
    ];
  }
  dameTema() { 
    return true;
  }

}
