import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1>{{ title }}</h1>
    <hr>
    `
})
export class CounterComponent {
    private defaultValueCounter : number = 10;
    public title : string = "Hola Mundo";
    public counter : number = 10;

    constructor() { }

    decrementarEnUno(value : number) : void {
        this.counter -= value;
    }

    incrementarEnUno(value : number) : void {
        this.counter += value;
    }

    resetCounter() : void {
        this.counter = this.defaultValueCounter;
    }
}