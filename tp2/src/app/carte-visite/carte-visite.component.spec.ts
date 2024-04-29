import { Component, OnInit } from '@angular/core';
import { CarteVisite } from './carte-visite.model';
import { FormsModule } from '@angular/forms';
@Component({
selector: 'app-carte-visite',
imports: [FormsModule],
standalone:true,
templateUrl: './carte-visite.component.html',
styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent implements OnInit {
carteVisite: CarteVisite = new CarteVisite();
constructor() { }
ngOnInit(): void {
}
onSubmit(): void {
// Ici, vous pouvez implémenter la logique pour enregistrer les données
// ou simplement afficher les données dans la console pour l'instant
console.log(this.carteVisite);
}
}
