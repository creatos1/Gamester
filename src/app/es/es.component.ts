import { Component, OnInit } from '@angular/core';

declare var particlesJS: any; // Declaración de la función particlesJS

@Component({
  selector: 'app-es',
  templateUrl: './es.component.html',
  styleUrls: ['./es.component.scss']
})
export class EsComponent implements OnInit {
  isVertical: boolean = false;
  audio = new Audio();
  audioIconSrc = '../../assets/img/sound.png'; // Cambia la ruta al icono de audio activado

  toggleVertical() {
    this.isVertical = !this.isVertical;
  }

  constructor() { }

  ngOnInit(): void {
    // Configuración de las partículas
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80, // Aumenta el número de partículas
          "density": {
            "enable": true,
            "value_area": 900// Ajusta el área donde se distribuyen las partículas
          }
        },
        "color": {
          "value": "#ff8000" // Color rojo para simular el fuego
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.8,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 10,
            "size_min": 1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false
        },
        "move": {
          "enable": true,
          "speed": 10, // Aumenta la velocidad de movimiento
          "direction": "top-right", // Dirección de movimiento
          "random": true, // Movimiento aleatorio
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
    this.audio.src = '../../assets/sound/sound.mp3'; // Cambia la ruta al archivo de audio
    this.audio.load();
    this.audio.loop = true; // Establece el audio en bucle
    this.audio.play(); // Reproduce automáticamente el audio al cargar la página
  }
  toggleAudio() {
    if (this.audio.paused) {
      this.audio.play();
      this.audioIconSrc = '../../assets/img/sound.png'; // Cambia la ruta al icono de audio activado
    } else {
      this.audio.pause();
      this.audioIconSrc = '../../assets/img/nosound.png'; // Cambia la ruta al icono de audio desactivado
    }
  }
}
