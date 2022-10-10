import { People } from './../models/people.model';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
const endpoint = 'https://swapi.dev/api/';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }
  //GET PEOPLE
  getPeople(): Observable<any> {
    return this.http.get<HttpRequest<any>[]>(endpoint + 'people').pipe();
  }

  getPeopleId(_id: string): Observable<any> {
    return this.http.get<People>(endpoint + 'people/' + _id).pipe();
  }
  //GET FILMS
  getFilms(): Observable<any> {
    return this.http.get<HttpRequest<any>[]>(endpoint + 'films').pipe();
  }
}
