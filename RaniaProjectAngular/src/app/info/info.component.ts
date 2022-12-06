import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
id!: string;
  constructor(private route : ActivatedRoute ) { }

  ngOnInit(): void {
    console.log(this.route);
    this.id=this.route.snapshot.params['id'];
  }

}
