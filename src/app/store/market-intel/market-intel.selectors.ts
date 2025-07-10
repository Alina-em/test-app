import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MarketIntelligenceState, marketIntelligenceFeatureKey } from './market-intel.reducer';

export const selectMarketIntelligenceState = createFeatureSelector<MarketIntelligenceState>(
  marketIntelligenceFeatureKey
);

export const selectMarketIntelligenceData = createSelector(
  selectMarketIntelligenceState,
  (state: MarketIntelligenceState) => state.data
);