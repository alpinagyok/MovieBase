import { Component, Input } from '@angular/core';
import { IMovieDetail } from '../models/movieDetail.model';

@Component({
  selector: 'app-movie-detail-view',
  templateUrl: './movie-detail-view.component.html',
  styleUrls: ['./movie-detail-view.component.sass'],
})

// No logic here. This component is for visualization
export class MovieDetailViewComponent {
  @Input()
  movie: IMovieDetail;
}
