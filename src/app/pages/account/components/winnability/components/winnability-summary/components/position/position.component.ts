import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-position',
  imports: [],
  templateUrl: './position.component.html',
  styleUrl: './position.component.scss'
})
export class PositionComponent {

  positionData = input.required<{
    yourScore: number;
    marketAverage: number;
    topCompetitor: number;
  }>();


  positionItems = computed(() => {
    const data = this.positionData();
    return [
      { label: 'Your score', value: data.yourScore, isYours: true },
      { label: 'Market Avg', value: data.marketAverage, isYours: false },
      { label: 'Top competitor', value: data.topCompetitor, isYours: false }
    ];
  });
  
}
