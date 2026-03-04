import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Show } from '../models/show.model';
import { Episode } from '../models/episode.model';
import { CastMember } from '../models/cast.model';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  private baseUrl = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) {}

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(`${this.baseUrl}/shows`);
  }

  searchShows(query: string): Observable<Show[]> {
    return this.http
      .get<{ score: number; show: Show }[]>(
        `${this.baseUrl}/search/shows?q=${encodeURIComponent(query)}`
      )
      .pipe(map((results) => results.map((r) => r.show)));
  }

  getShow(id: number): Observable<Show> {
    return this.http.get<Show>(`${this.baseUrl}/shows/${id}`);
  }

  getEpisodes(id: number): Observable<Episode[]> {
    return this.http.get<Episode[]>(`${this.baseUrl}/shows/${id}/episodes`);
  }

  getCast(id: number): Observable<CastMember[]> {
    return this.http.get<CastMember[]>(`${this.baseUrl}/shows/${id}/cast`);
  }
}
