import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PortfolioGoalsState } from './portfolio-goals.reducer';

export const selectPortfolioGoalsState = createFeatureSelector<PortfolioGoalsState>(
  'portfolioGoals'
);

export const selectPortfolioGoalsData = createSelector(
  selectPortfolioGoalsState,
  (state) => state.data
);

export const selectPortfolioGoalsLoading = createSelector(
  selectPortfolioGoalsState,
  (state) => state.loading
);

export const selectPortfolioGoalsError = createSelector(
  selectPortfolioGoalsState,
  (state) => state.error
);