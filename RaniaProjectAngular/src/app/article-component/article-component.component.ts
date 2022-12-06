import { Component, OnInit } from '@angular/core';
import { article } from '../model/article';

@Component({
  selector: 'app-article-component',
  templateUrl: './article-component.component.html',
  styleUrls: ['./article-component.component.css']
})
export class ArticleComponentComponent implements OnInit {
  articlelist! : article[];
  constructor() { }

  ngOnInit(): void {
    this. articlelist = 
    [
      {id:'Le championnat du monde',contenu:'Le champion du monde de cette annéeest .....',auteur:'Med Taher',date:'12/12/2005',categorie:'Sport'},
      {id:'Les nouveaux parents',contenu:'Les nouveaux parents. ..',auteur:'AhmedSaid',date:'11/11/2018',categorie:'Education'},
      {id:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi...',auteur:'Marie Elsa',date:'02/04/2017',categorie:'Travail'}
    ]
  }

}
