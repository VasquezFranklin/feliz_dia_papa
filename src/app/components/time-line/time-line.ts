import { Component } from '@angular/core';

@Component({
  selector: 'app-time-line',
  standalone: true,
  templateUrl: './time-line.html',
  styleUrls: ['./time-line.css'],
  imports: []
})
export class TimeLineComponent {
  // Arreglo tipado implícitamente con los datos de tu galería
  recuerdos = [
    {
      id: 1,
      fecha: 'Junio 2022',
      titulo: 'Nuestro viaje',
      descripcion: 'Un recuerdo inolvidable de ese viaje. Gracias por acompañarme siempre.',
      image: 'assets/images/20220604_123106.jpg'
    },
    {
      id: 2,
      fecha: 'Octubre 2022',
      descripcion: 'Un recuerdo inolvidable de ese viaje. Gracias por acompañarme siempre.',
      image: 'assets/images/20220604_123126.jpg'
    },
    {
      id: 3,
      fecha: 'Octubre 2025',
      descripcion: 'Festejando a lo grande.',
      image: 'assets/images/20220604_130928.jpg'
    },
    {
      id: 4,
      fecha: 'Octubre 2025',
      titulo: 'Tus 50 Años',
      descripcion: 'Ver a la familia reunida fue una experiencia que nunca voy a olvidar en mi vida.',
      image: 'assets/images/20251003_162923.jpg'
    },
    {
      id: 5,
      fecha: 'Octubre 2025',
      titulo: 'Tus 50 Años',
      descripcion: 'Festejando a lo grande. Ver cómo disfrutaste ese día con la familia fue espectacular.',
      image: 'assets/images/20251003_115640.jpg'
    },
    {
      id: 6,
      fecha: 'Octubre 2025',
      titulo: 'Tus 50 Años',
      descripcion: 'Una foto con el padre que me enseño a ser un buen hombre de bien.',
      image: 'assets/images/IMG-20251005-WA0026.jpg'
    },
    {
      id: 7,
      fecha: 'Octubre 2025',
      titulo: 'Tus 50 Años',
      descripcion: 'otra mas por si las dudas, aqui con su hijito el gaucho de pura cepa nomas igual que el padre',
      image: 'assets/images/IMG-20251005-WA0027.jpg'
    },
    {
      id: 8,
      fecha: 'Octubre 2025',
      titulo: 'Tus 50 Años',
      descripcion: 'nuestra familia juntos celebrando el dia mas especial de su vida ',
      image: 'assets/images/IMG-20260617-WA0031.jpg'
    },
    {
      id: 9,
      fecha: '',
      titulo: 'Mi Bautismo',
      descripcion: 'Aun se acuerda de mi baustismo?',
      image: 'assets/images/20231023_113205.jpg'
    },
    {
      id: 10,
      fecha: 'Diciembre Año Nuevo',
      titulo: 'Año Nuevo juntos',
      descripcion: 'Festejando a lo grande en el Hotel el Kactus.',
      image: 'assets/images/IMG-20230727-WA0012.jpg'
    },
    {
      id: 11,
      fecha: 'Enero 2022',
      titulo: 'Abrida de regalos los 50 de la tia Pascuala',
      descripcion: 'Una fotito con mi ejemplo a seguir.',
      image: 'assets/images/20221030_181406.jpg'
    },
    {
      id: 12,
      fecha: 'Enero 2022',
      titulo: 'En la finalzacion de la "serenata a nuestra virgen de belén"',
      descripcion: 'Aqui se demuestra que mi padre es un gaucho más, eres El mejor papá del mundo.',
      image: 'assets/images/20220122_004419.jpg'
    }
  ]
}
