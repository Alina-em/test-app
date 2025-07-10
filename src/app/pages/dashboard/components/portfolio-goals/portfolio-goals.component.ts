import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioGoalsMetrics } from '../../../../shared/interfaces/dashboard-interfaces/portfolio-goals.interface';
import { Store } from '@ngrx/store';
import { selectPortfolioGoalsData } from '../../../../store/portfolio-goals/portfolio-goals.selectors';
import { PortfolioGoalsGetLoad } from '../../../../store/portfolio-goals/portfolio-goals.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-goals',
  imports: [CommonModule],
  templateUrl: './portfolio-goals.component.html',
  styleUrl: './portfolio-goals.component.scss'
})
export class PortfolioGoalsComponent implements OnInit{

  portfolioGoals$: Observable<PortfolioGoalsMetrics | null>;

  constructor(private store: Store) {
    this.portfolioGoals$ = this.store.select(selectPortfolioGoalsData)
  }

  ngOnInit(): void {
    this.store.dispatch(PortfolioGoalsGetLoad());
  }

  getLossRatioColor(progress: number) {
    if (progress < 0.5) {
      return 'fill-green';
    } else if (progress < 0.8) {
      return 'fill-yellow';
    } else {
      return 'fill-red';
    }
  }
}
