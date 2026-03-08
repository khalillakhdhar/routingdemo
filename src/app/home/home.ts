import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //ng OnInit() {
  nom: String = 'Ahmed';
  prenom: String = 'Zbidi';
  note: number = 17;
  ngOnInit(): void {
    console.log('Composant initialisé !');
  }
  changer(valeur: number) {
    if (this.note + valeur <= 20 && this.note + valeur >= 0) {
      this.note += valeur;
    } else alert('Note doit être entre 0 et 20');
  }
}
