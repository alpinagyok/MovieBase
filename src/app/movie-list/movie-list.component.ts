import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMoviePage } from '../models/moviePages.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass'],
})
export class MovieListComponent {
  constructor(private router: Router) {}
  @Input()
  moviePage: IMoviePage;

  // Goes to movie detail page
  onClick(id: string): void {
    this.router.navigate([`/movie/${id}`]);
  }
}
