import { Component, OnInit } from '@angular/core';
import { People } from './../../models/people.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss'],
})
export class PeopleDetailComponent implements OnInit {
  constructor(
    public rest: RestService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  people: People = new People();
  heightType = '';
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getPeopleId(params['id']);
      console.log(params['id']);
    });
  }

  getPeopleId(id: string): void {
    this.rest.getPeopleId(id).subscribe((resp: any) => {
      this.people = resp;
      console.log(resp);
    });
  }
}
