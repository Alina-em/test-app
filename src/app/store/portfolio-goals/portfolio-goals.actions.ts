import { createAction, props } from '@ngrx/store';
import { PortfolioGoalsMetrics } from '../../shared/interfaces/dashboard-interfaces/portfolio-goals.interface';

export const PortfolioGoalsGetLoad = createAction(
  '[Portfolio Goals Get] Load'
);

export const PortfolioGoalsGetSuccess = createAction(
  '[Portfolio Goals Get] Success',
  props<{ data: PortfolioGoalsMetrics }>()
);

export const PortfolioGoalsGetFailure = createAction(
  '[Portfolio Goals Get] Failure',
  props<{ error: any }>()
);