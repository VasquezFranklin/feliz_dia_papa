import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { TimeLineComponent } from './components/time-line/time-line';
import { InteractiveComponent } from './components/interactive/interactive';
import { FooterComponent } from './components/footer/footer';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    TimeLineComponent,
    InteractiveComponent,
    FooterComponent

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'tp-webservice-6172';

  ngOnInit(): void {
    // Inicializamos AOS una vez que el HTML ya está listo
    AOS.init({
      once: true,    // Ejecutar la animación solo la primera vez que hace scroll
      // Desplazamiento (en px) para que se dispare antes de llegar al elemento
    });
  }
}
