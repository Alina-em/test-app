import { Component, input } from '@angular/core';

@Component({
  selector: 'app-score',
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss'
})
export class ScoreComponent {
  score = input.required<{ overallScore: number; winnabilitySummary: string }>();

  readonly numberOfCircles = Array(4).fill(0);

}
