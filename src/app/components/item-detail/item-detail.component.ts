import { People } from './../../models/people.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  people: People[] = [];

  constructor(public rest: RestService, private router: Router) {}

  ngOnInit(): void {
    this.getPeople();
  }
  characters = [];

  getPeople(): void {
    this.rest.getPeople().subscribe((resp: any) => {
      this.people = resp.results;
      console.log(resp.results);
    });
  }

}
