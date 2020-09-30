import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ISearchQuery } from '../models/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent {
  constructor(private router: Router) {}

  @Input() searchQuery: ISearchQuery;

  // Empty by default (welcome page)
  searchForm = new FormGroup({
    title: new FormControl(''),
    year: new FormControl(''),
    type: new FormControl(''),
  });

  ngOnChanges(changes: SimpleChanges) {
    this.searchForm = new FormGroup({
      title: new FormControl(changes.searchQuery.currentValue.title),
      year: new FormControl(changes.searchQuery.currentValue.year),
      type: new FormControl(changes.searchQuery.currentValue.type),
    });
  }

  onSubmit() {
    const { value } = this.searchForm;
    if (value.title === '') {
      window.alert('Please enter title');
    } else {
      this.router.navigate(['/page/1?'], {
        queryParams: { title: value.title, year: value.year, type: value.type },
      });
    }
  }
}
