import { Component, OnInit } from '@angular/core';
import { paiement } from '../model/paiement';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }
paiement!:paiement;
  ngOnInit(): void {
    this.paiement= new paiement();
  }

}
