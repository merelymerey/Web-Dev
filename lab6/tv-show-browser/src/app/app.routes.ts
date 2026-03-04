import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShowsComponent } from './components/shows/shows.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
import { ShowEpisodesComponent } from './components/show-episodes/show-episodes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'shows/:id', component: ShowDetailComponent },
  { path: 'shows/:id/episodes', component: ShowEpisodesComponent },
];
