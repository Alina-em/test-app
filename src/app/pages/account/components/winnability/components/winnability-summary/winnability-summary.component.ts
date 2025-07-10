import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ScoreComponent } from './components/score/score.component';
import { HistoricalTrendComponent } from './components/historical-trend/historical-trend.component';
import { PositionComponent } from './components/position/position.component';
import { WinnabilitySummary } from '../../../../../../shared/interfaces/account/winnability/winnability.interface';

@Component({
  selector: 'app-winnability-summary',
  imports: [
    CommonModule,
    ScoreComponent,
    HistoricalTrendComponent,
    PositionComponent
  ],
  templateUrl: './winnability-summary.component.html',
  styleUrl: './winnability-summary.component.scss'
})
export class WinnabilitySummaryComponent {
  data = input<WinnabilitySummary>();
}
