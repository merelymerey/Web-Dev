import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShowService } from '../../services/show.service';
import { Show } from '../../models/show.model';

@Component({
  selector: 'app-shows',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.css',
})
export class ShowsComponent implements OnInit {
  shows: Show[] = [];
  allShows: Show[] = [];
  searchQuery = '';
  loading = true;

  constructor(private showService: ShowService, private router: Router) {}

  ngOnInit(): void {
    this.showService.getShows().subscribe({
      next: (data) => {
        this.allShows = data;
        this.shows = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }

  search(): void {
    if (this.searchQuery.trim() === '') {
      this.shows = this.allShows;
      return;
    }
    this.loading = true;
    this.showService.searchShows(this.searchQuery).subscribe({
      next: (data) => {
        this.shows = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.shows = this.allShows;
  }

  goToDetail(id: number): void {
    this.router.navigate(['/shows', id]);
  }
}
