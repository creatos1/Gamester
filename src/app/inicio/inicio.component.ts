import { Component } from '@angular/core';
import { LanguageService } from '../../app/services/languageservice'; // Ajusta la ruta al servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  constructor(private languageService: LanguageService, private router: Router) {}

  saveLanguage(event: Event) {
    const selectedLanguage = (event.target as HTMLSelectElement)?.value;
    if (selectedLanguage) {
      this.languageService.setLanguage(selectedLanguage);
    }
  }

  checkLanguage() {
    const selectedLanguage = this.languageService.getSelectedLanguage();
    if (selectedLanguage === 'es') {
      window.location.href = '/uploadform';
    } else if (selectedLanguage === 'en') {
      window.location.href = 'https://www.google.com';
    } else {
      alert('Select a language first!');
    }
  }
}
