import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShowService } from '../../services/show.service';
import { Show } from '../../models/show.model';
import { CastMember } from '../../models/cast.model';

@Component({
  selector: 'app-show-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.css',
})
export class ShowDetailComponent implements OnInit {
  show: Show | null = null;
  cast: CastMember[] = [];
  loading = true;
  showId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private showService: ShowService
  ) {}

  ngOnInit(): void {
    this.showId = Number(this.route.snapshot.paramMap.get('id'));

    this.showService.getShow(this.showId).subscribe({
      next: (data) => {
        this.show = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });

    this.showService.getCast(this.showId).subscribe({
      next: (data) => (this.cast = data.slice(0, 10)),
      error: (err) => console.error(err),
    });
  }

  goBack(): void {
    this.router.navigate(['/shows']);
  }
}
