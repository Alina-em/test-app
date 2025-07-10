import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { provideIcons } from '@ng-icons/core';
import { heroCheckCircle, heroXCircle, heroStar } from '@ng-icons/heroicons/outline';


import { workQueueGetReducer } from './store/work-queue/work-queue.reducer';
import { provideHttpClient } from '@angular/common/http';
import { WorkQueueEffects } from './store/work-queue/work-queue.effects';
import { PortfolioGoalsEffects } from './store/portfolio-goals/portfolio-goals.effects';
import { portfolioGoalsReducer } from './store/portfolio-goals/portfolio-goals.reducer';
import { MarketIntelligenceEffects } from './store/market-intel/market-intel.effects';
import { marketIntelligenceFeatureKey, marketIntelligenceReducer } from './store/market-intel/market-intel.reducer';
import { MyAccountGetEffects } from './store/my-accounts/my-accounts.effects';
import { myAccountGetReducer } from './store/my-accounts/my-accounts.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), provideClientHydration(withEventReplay()), provideStore({
    workQueue: workQueueGetReducer,
    portfolioGoals: portfolioGoalsReducer,
    [marketIntelligenceFeatureKey]: marketIntelligenceReducer,
    myAccount: myAccountGetReducer
  }), provideEffects(
    [WorkQueueEffects, PortfolioGoalsEffects, MarketIntelligenceEffects, MyAccountGetEffects]
  ), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  provideIcons({ 
    heroCheckCircle, 
    heroXCircle, 
    heroStar,
  }),
]
};
