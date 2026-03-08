import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imc',
  imports: [FormsModule],
  templateUrl: './imc.html',
  styleUrl: './imc.css',
})
export class Imc {
  poids!: number;
  taille!: number;
  imc!: number;
  remarque: string = '';
  calculer() {
    if (this.poids <= 0 || this.taille <= 0) {
      alert('Poids et taille doivent être positifs');
    } else {
      this.imc = Math.round(this.poids / (this.taille * this.taille));
      if (this.imc < 18.5) {
        this.remarque = 'Maigreur';
      } else if (this.imc < 25) {
        this.remarque = 'Poids normal';
      } else {
        this.remarque = 'Surpoids';
      }
    }
  }
}
