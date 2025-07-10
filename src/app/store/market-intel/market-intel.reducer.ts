import { createReducer, on } from '@ngrx/store';
import * as MarketIntelligenceActions from './market-intel.actions';
import { MarketIntelligenceItem } from '../../shared/interfaces/dashboard-interfaces/market-intel.interface';

export interface MarketIntelligenceState {
  data: MarketIntelligenceItem[] | null;
  loading: boolean;
  error: string | null;
}

export const initialMarketIntelligenceState: MarketIntelligenceState = {
  data: null,
  loading: false,
  error: null,
};

export const marketIntelligenceFeatureKey = 'marketIntelligence';

export const marketIntelligenceReducer = createReducer(
  initialMarketIntelligenceState,
  on(MarketIntelligenceActions.MarketIntelligenceGet, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(MarketIntelligenceActions.MarketIntelligenceGetSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
    error: null,
  })),
  on(MarketIntelligenceActions.MarketIntelligenceGetFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    data: null,
  }))
);