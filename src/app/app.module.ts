import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmListComponent } from './components/film-list/film-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { StarshipsLsitComponent } from './components/starships-lsit/starships-lsit.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    FilmListComponent,
    PeopleDetailComponent,
    PlanetsListComponent,
    SpeciesListComponent,
    StarshipsLsitComponent,
    VehiclesListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
