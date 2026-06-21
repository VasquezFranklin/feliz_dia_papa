import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecuerdoService } from '../../services/recuerdo.service';

@Component({
  selector: 'app-interactive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interactive.html',
  styleUrls: ['./interactive.css']
})
export class InteractiveComponent implements OnDestroy {

  fraseMostrada: string = 'Presioná el botón para iniciar el sistema...';
  estadoTerminal: 'READY' | 'CONNECTING' | 'TYPING' = 'READY';
  private typingInterval: any;

  private frasesPersonales: string[] = [
    '¿Te acordás del viaje que metimos en junio de 2022? Qué manera de pasarla bien no?,Pá .',
    'Todavía me acuerdo de lo espectacular que estuvo tu fiesta de los 50 años en octubre, Fue unico ese dia.',
    'Nadie hace asados tremendos ni arregla las cosas de la casa con la paciencia que usted tiene.',
    "Papá. Me has dado las mejores cosas de la vida: Tu tiempo, tus cuidados y tu amor. Estoy verdaderamente agradecido por tenerte en mi vida. Feliz Día del Padre.",
    "Papá, has sido una de mis mayores influencias en la vida. Me has enseñado muchas cosas, pero la más importante: que nunca debo dejar de aprender.",
    "Gracias por actuar como un niño cuando era un niño, actuar como un amigo cuando necesitaba un amigo, y actuar como un padre cuando lo necesitaba. Eres el mejor hombre que conozco. Feliz Día del Padre",
    "Me alegro de que hayamos compartido momentos tan divertidos juntos, admiro profundamente el buen hombre y el maravilloso padre que eres",
    "Todo el mundo necesita una figura paterna mientras crece y yo tuve la suerte de tener la auténtica. Gracias por estar siempre ahí para mí",
    "Feliz Día del Padre a mi héroe y modelo a seguir. Gracias por todo lo que has hecho por nuestra familia. Te amamos con todo nuestro corazón.",
    "Nunca te olvido. Feliz día del padre para el padre más genial de la historia",
    "Cuanto más mayor me hago, más me doy cuenta de lo importante que es tener un padre como tú. Has proporcionado estabilidad en mi vida y el amor y la aceptación que necesitaba. Feliz Día del Padre",
    "Enviando amor y agradecimiento a través de las millas al mejor padre de todos",
    "Deseando poder estar allí disfrutando de este junto a ti y pensando en todos nuestros divertidos Días del Padre.",
    "Pienso en ti y espero que tengas un gran día, echo de menos estar contigo en el Día del Padre",
    "¡Feliz Día del Padre! Ojalá pudiera estar allí cocinando junto a usted y compartir juntos en familia",
    "Feliz Día del Padre desde la distancia para un padre increíble. Te echo de menos",
    "Muchas gracias por tu amor silencioso, por madrugar sin quejarte, por esperar despierto y por preocuparte incluso cuando no lo notaba.",
    "Los héroes reales no llevan capa; llevan cansancio, responsabilidad y un amor inmenso por su familia que nunca se rinde.",
    "Pensar en todo lo que callaste para cuidarme me hace entender que el amor verdadero también sabe guardar silencio.",
    "Tu mayor regalo fue estar ahí, no solo cuando todo iba bien, sino también cuando hacía falta apoyo y paciencia.",
    "Aprendí más de ti por lo que hiciste que por lo que dijiste, y eso marcó mi forma de ver la vida.",
    "Cada esfuerzo tuyo, incluso los que nunca vi, construyó el camino que hoy puedo recorrer."
  ];

  constructor(
    private recuerdoService: RecuerdoService,
    private cdr: ChangeDetectorRef // <-- INYECCIÓN: Herramienta nativa para forzar el renderizado
  ) { }

  ejecutarComando() {
    if (this.estadoTerminal === 'CONNECTING' || this.estadoTerminal === 'TYPING') return;

    this.limpiarIntervalo();
    this.estadoTerminal = 'CONNECTING';
    this.fraseMostrada = 'Conectando con el servidor en la nube...';

    // Forzamos a que el HTML muestre el estado de carga inmediatamente
    this.cdr.detectChanges();

    const probabilidad = Math.random();

    if (probabilidad < 0.5) {
      this.recuerdoService.obtenerFraseIa().subscribe({
        next: (fraseIa) => {
          this.estadoTerminal = 'TYPING';
          this.iniciarEfectoEscritura(fraseIa);
        },
        error: (err) => {
          console.error(err);
          this.estadoTerminal = 'READY';
          this.fraseMostrada = 'ERROR: No se pudo establecer conexión con el servidor.';
          this.cdr.detectChanges();
        }
      });
    } else {
      setTimeout(() => {
        try {
          this.estadoTerminal = 'TYPING';
          const indice = Math.floor(Math.random() * this.frasesPersonales.length);
          this.iniciarEfectoEscritura(this.frasesPersonales[indice]);
        } catch (e) {
          console.error(e);
          this.estadoTerminal = 'READY';
          this.fraseMostrada = 'ERROR: Fallo en memoria local.';
          this.cdr.detectChanges();
        }
      }, 1500);
    }
  }

  private iniciarEfectoEscritura(texto: string) {
    this.fraseMostrada = '';
    let i = 0;

    this.typingInterval = setInterval(() => {
      if (i < texto.length) {
        this.fraseMostrada += texto.charAt(i);

        // CLAVE: Forzamos a que Angular redibuje la pantalla letra por letra
        this.cdr.detectChanges();
        i++;
      } else {
        this.limpiarIntervalo();
        this.estadoTerminal = 'READY';

        // Forzamos el redibujado final para rehabilitar el botón
        this.cdr.detectChanges();
      }
    }, 35);
  }

  private limpiarIntervalo() {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  ngOnDestroy() {
    this.limpiarIntervalo();
  }
}
