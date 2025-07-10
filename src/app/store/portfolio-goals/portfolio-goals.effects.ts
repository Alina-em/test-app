import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import {
  PortfolioGoalsGetFailure,
  PortfolioGoalsGetLoad,
  PortfolioGoalsGetSuccess
} from "./portfolio-goals.actions";
import { PortfolioGoalsService } from "../../pages/dashboard/components/portfolio-goals/portfolio-goals.service";

@Injectable()
export class PortfolioGoalsEffects {
  readonly getPortfolioGoals$;

  constructor(
    private actions$: Actions,
    private portfolioGoalsService: PortfolioGoalsService
  ) {
    this.getPortfolioGoals$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(PortfolioGoalsGetLoad),
        tap(() => console.log('PortfolioGoalsEffects: Caught PortfolioGoalsGetLoad action')),
        switchMap(() => {
          return this.portfolioGoalsService.getPortfolioGoals().pipe(
            tap(data => console.log('PortfolioGoalsEffects: received data from service:', data)),
            map((data) => {
                console.log('PortfolioGoalsEffects: dispatching PortfolioGoalsGetSuccess action');
                return PortfolioGoalsGetSuccess({ data })
            }),
            catchError((err) => {
                console.error('PortfolioGoalsEffects: error in getPortfolioGoals$', err);
                return of(PortfolioGoalsGetFailure({ error: err }))
            })
          );
        })
      );
    });
  }
}