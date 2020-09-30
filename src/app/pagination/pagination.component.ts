import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app-state';
import { ISearchQuery } from '../models/search.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass'],
})
export class PaginationComponent implements OnInit {
  constructor(private router: Router, private store: Store<AppState>) {}

  totalPages$: Observable<number> = this.store.select(
    (state) => state.search.totalPages
  );
  totalPages: number;

  @Input()
  searchQuery: ISearchQuery;
  @Input()
  currentPage: number;

  ngOnInit(): void {
    this.totalPages$.subscribe((totalPages) => {
      this.totalPages = totalPages;
    });
  }

  onClick(page: number): void {
    const { title, year, type } = this.searchQuery;

    // Go to correct page after clicking it
    this.router.navigate([`/page/${page}?`], {
      queryParams: { title, year, type },
    });
  }
}
