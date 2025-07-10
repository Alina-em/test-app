import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { WinnabilitySummaryComponent } from './components/winnability-summary/winnability-summary.component';
import { WinnabilityFactorsComponent } from './components/winnability-factors/winnability-factors.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { WinnabilityService } from './winnability.service';
import { WinnabilityData } from '../../../../shared/interfaces/account/winnability/winnability.interface';
import { Recommendation } from '../../../../shared/interfaces/account/winnability/recommendations.interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-winnability',
  imports: [
    CommonModule,
    WinnabilitySummaryComponent,
    WinnabilityFactorsComponent,
    RecommendationsComponent,
  ],
  templateUrl: './winnability.component.html',
  styleUrl: './winnability.component.scss'
})
export class WinnabilityComponent {
  winnabilityData: Signal<WinnabilityData | undefined>;
  recommendationsData: Signal<Recommendation[] | undefined>

  constructor(private winnabilityService: WinnabilityService) {
    this.winnabilityData = toSignal(this.winnabilityService.getWinnabilityData());
    this.recommendationsData = toSignal(this.winnabilityService.getRecommendationsData());
  }
}
