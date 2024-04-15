import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../app/services/languageservice'; // Ajusta la ruta al servicio
import { Router } from '@angular/router';
declare var particlesJS: any; // Declaración de la función particlesJS

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  constructor(private languageService: LanguageService, private router: Router) {}
  isVertical: boolean = false;
  audio = new Audio();
  audioIconSrc = '../../assets/img/sound.png'; // Cambia la ruta al icono de audio activado

  ngOnInit():void {
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
          "value": "#FF0000" // Color rojo para simular el fuego
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
            "speed": 3,
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
          "speed":15, // Aumenta la velocidad de movimiento
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
    this.audio.src = '../../assets/sound/soundmenu.mp3'; // Cambia la ruta al archivo de audio
    this.audio.load();
    this.audio.loop = true; // Establece el audio en bucle
    this.audio.play(); // Reproduce automáticamente el audio al cargar la página
  }

  saveLanguage(event: Event) {
    const selectedLanguage = (event.target as HTMLSelectElement)?.value;
    if (selectedLanguage) {
      this.languageService.setLanguage(selectedLanguage);
    }
  }

  checkLanguage() {
    const selectedLanguage = this.languageService.getSelectedLanguage();
    if (selectedLanguage === 'es') {
      window.location.href = '/homees';
    } else if (selectedLanguage === 'en') {
      alert('Coming soon!');
    } else {
      alert('Select a language first!');
    }
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

