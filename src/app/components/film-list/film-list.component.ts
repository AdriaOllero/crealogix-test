import { Film } from './../../models/film.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  films: Film[] = [];
  constructor(public rest: RestService, private router: Router) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void {
    this.rest.getFilms().subscribe((resp: any) => {
      this.films = resp.results;
      console.log(this.films);
    });
  }
}
