import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor() { }

  public heroNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Viuda Negra'];
  public heroeEliminado?: string;

  borrarUltimoHeroe(): void {
    this.heroeEliminado = this.heroNames.pop()
  }

}
