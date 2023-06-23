import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public hero : string = 'Ironman';
  public name : string = "Daniel";
  public age : number = 45;

  get capitalizedName() : string{
    return this.name.toUpperCase();
  }

  getHeroDescription() : string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero() : void {
    this.hero = 'Batman';
    this.name = 'Bruno Diaz';
  }

  changeAge() : void {
    this.age = 35;
  }

  resetData() : void {
    this.hero = 'Ironman';
    this.age = 45;
    this.name = 'Daniel';
  }
  
}
