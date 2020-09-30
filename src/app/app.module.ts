import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';

import { moviePagesReducer } from './reducers/moviePages.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MoviePagesEffects } from './effects/moviePages.effects';
import { MovieDetailEffects } from './effects/movieDetail.effects';
import { movieDetailReducer } from './reducers/movieDetail.reducer';
import { MovieDetailViewComponent } from './movie-detail-view/movie-detail-view.component';
import { searchReducer } from './reducers/search.reducer';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MoviesComponent,
    MovieDetailComponent,
    SearchComponent,
    PaginationComponent,
    MovieDetailViewComponent,
    WelcomeComponent,
    ErrorComponent,
    LoadingComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      moviePages: moviePagesReducer,
      movieDetails: movieDetailReducer,
      search: searchReducer,
    }),
    EffectsModule.forRoot([MovieDetailEffects, MoviePagesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states in devtools
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
