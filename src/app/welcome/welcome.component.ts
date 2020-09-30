import { Component } from '@angular/core';
import { ISearchQuery } from '../models/search.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass'],
})
export class WelcomeComponent {
  searchQuery: ISearchQuery = {
    title: '',
    year: '',
    type: '',
  };
}
