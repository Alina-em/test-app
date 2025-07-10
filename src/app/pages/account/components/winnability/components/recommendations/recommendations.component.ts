import { Component, input } from '@angular/core';
import { Recommendation } from '../../../../../../shared/interfaces/account/winnability/recommendations.interface';

@Component({
  selector: 'app-recommendations',
  imports: [],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent {
  rocketIconPath = '/assets/rocket-icon.png';

  recommendations = input.required<Recommendation[]>()
}
