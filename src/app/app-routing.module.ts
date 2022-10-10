import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './components/film-list/film-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { StarshipsLsitComponent } from './components/starships-lsit/starships-lsit.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: ItemDetailComponent },
  { path: 'people-detail/:id', component: PeopleDetailComponent },
  { path: 'films', component: FilmListComponent },
  { path: 'planets', component: PlanetsListComponent },
  { path: 'species', component: SpeciesListComponent },
  { path: 'starships', component: StarshipsLsitComponent },
  { path: 'vehicles', component: VehiclesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
