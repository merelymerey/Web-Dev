import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShowService } from '../../services/show.service';
import { Episode } from '../../models/episode.model';

@Component({
  selector: 'app-show-episodes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-episodes.component.html',
  styleUrl: './show-episodes.component.css',
})
export class ShowEpisodesComponent implements OnInit {
  seasons: { season: number; episodes: Episode[] }[] = [];
  showId!: number;
  loading = true;

  constructor(private route: ActivatedRoute, private router: Router, private showService: ShowService) {}

  ngOnInit(): void {
    this.showId = Number(this.route.snapshot.paramMap.get('id'));
    this.showService.getEpisodes(this.showId).subscribe({
      next: (data) => {
        this.seasons = this.groupBySeason(data);
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }

  groupBySeason(episodes: Episode[]): { season: number; episodes: Episode[] }[] {
    const map: { [key: number]: Episode[] } = {};
    for (const ep of episodes) {
      if (!map[ep.season]) map[ep.season] = [];
      map[ep.season].push(ep);
    }
    return Object.keys(map)
      .map(Number)
      .sort((a, b) => a - b)
      .map((season) => ({ season, episodes: map[season] }));
  }

  goBack(): void {
    this.router.navigate(['/shows', this.showId]);
  }
}
