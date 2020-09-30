import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'page/:page', component: MoviesComponent },
  { path: '', component: WelcomeComponent },
  // Redirect any incorrect routes to Welcome page
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // { scrollPositionRestoration: 'top' }
  exports: [RouterModule],
})
export class AppRoutingModule {}
