import { createAction, props } from '@ngrx/store';
import { MarketIntelligenceItem } from '../../shared/interfaces/dashboard-interfaces/market-intel.interface';


export const MarketIntelligenceGet = createAction(
  '[Market Intelligence Fet] Load'
);

export const MarketIntelligenceGetSuccess = createAction(
  '[Market Intelligence Get] Success',
  props<{ data: MarketIntelligenceItem[] }>()
);

export const MarketIntelligenceGetFailure = createAction(
  '[Market Intelligence Get] Failure',
  props<{ error: string }>()
);