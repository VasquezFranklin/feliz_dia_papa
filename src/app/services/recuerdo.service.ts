import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecuerdoService {

  private bancoFrasesIa: string[] = [
    'El amor de un padre es el motor que nos impulsa a lograr lo imposible en la vida.',
    'Un buen padre es el que te guía con el ejemplo y te apoya en cada paso que das y al final del camino.',
    'Gracias por ser el pilar incondicional y el código base sobre el cual construyo mi futuro.',
    'Tu esfuerzo diario es la mayor inspiración que tengo para superarme como profesional y como hijo.',
    'No hay sistema ni algoritmo que pueda calcular el valor de todo lo que me enseñaste.'
  ];

  constructor() { }

  obtenerFraseIa(): Observable<string> {
    const indiceRandom = Math.floor(Math.random() * this.bancoFrasesIa.length);
    const fraseSeleccionada = this.bancoFrasesIa[indiceRandom];

    // Simulación de 1.5 segundos de latencia de red
    return of(fraseSeleccionada).pipe(delay(1500));
  }
}
