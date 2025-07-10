import { createReducer, on } from '@ngrx/store';
import * as PortfolioGoalsActions from './portfolio-goals.actions';
import { PortfolioGoalsMetrics } from '../../shared/interfaces/dashboard-interfaces/portfolio-goals.interface';

export interface PortfolioGoalsState {
  data: PortfolioGoalsMetrics | null;
  loading: boolean;
  error: any;
}

export const initialPortfolioGoalsState: PortfolioGoalsState = {
  data: null,
  loading: false,
  error: null,
};

export const portfolioGoalsReducer = createReducer(
  initialPortfolioGoalsState,
  on(PortfolioGoalsActions.PortfolioGoalsGetLoad, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(PortfolioGoalsActions.PortfolioGoalsGetSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
    error: null,
  })),
  on(PortfolioGoalsActions.PortfolioGoalsGetFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    data: null,
  }))
);