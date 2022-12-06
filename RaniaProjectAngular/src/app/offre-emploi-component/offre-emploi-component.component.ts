import { Component, OnInit } from '@angular/core';
import { Emploi } from '../model/Emploi';

@Component({
  selector: 'app-offre-emploi-component',
  templateUrl: './offre-emploi-component.component.html',
  styleUrls: ['./offre-emploi-component.component.css']
})
export class OffreEmploiComponentComponent implements OnInit {
  emploilist! : Emploi[];
  constructor() { }

  ngOnInit(): void {
    this.emploilist = [
      {reference:"1",titre:"salem",entreprise:"cot",etat:false},
      {reference:"1",titre:"salem",entreprise:"cot",etat:true},
      {reference:"1",titre:"salem",entreprise:"cot",etat:false},
    ]
  }

}
