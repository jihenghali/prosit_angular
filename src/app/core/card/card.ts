import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, output } from '@angular/core';
import { Conference } from '../../Models/conference';

@Component({
  selector: 'app-card',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './card.html',
})
export class Card {
  @Input({ required: true }) conf!: Conference;

  readonly favoriteRequested = output<void>();
  readonly likeRequested = output<void>();
}
