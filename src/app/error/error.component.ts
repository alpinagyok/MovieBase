// Error page

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass'],
})
export class ErrorComponent {
  @Input()
  error: string;
}
