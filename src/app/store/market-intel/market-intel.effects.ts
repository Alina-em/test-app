import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import {
  MarketIntelligenceGet,
  MarketIntelligenceGetFailure,
  MarketIntelligenceGetSuccess
} from "./market-intel.actions";
import { MarketIntelService } from "../../pages/dashboard/components/market-intel/market-intel.service";

@Injectable()
export class MarketIntelligenceEffects {
  readonly getMarketIntelligence$;

  constructor(
    private actions$: Actions,
    private marketIntelService: MarketIntelService
  ) {
    this.getMarketIntelligence$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(MarketIntelligenceGet),
        tap(() => console.log('MarketIntelligenceEffects: Caught MarketIntelligenceGet action')),
        switchMap(() => {
          return this.marketIntelService.getMarketIntelligence().pipe(
            tap(data => console.log('MarketIntelligenceEffects: received data from service:', data)),
            map((data) => {
                console.log('MarketIntelligenceEffects: dispatching MarketIntelligenceGetSuccess action');
                return MarketIntelligenceGetSuccess({ data })
            }),
            catchError((err) => {
                console.error('MarketIntelligenceEffects: error in getMarketIntelligence$', err);
                return of(MarketIntelligenceGetFailure({ error: err }))
            })
          );
        })
      );
    });
  }
}