import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { workQueueGetFailure, workQueueGetLoad, workQueueGetSuccess } from "./work-queue.actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { WorkQueueService } from "../../pages/dashboard/components/work-queue/work-queue.service";

@Injectable()
export class WorkQueueEffects {
  readonly getWorkQueue$;

  constructor(
    private actions$: Actions,
    private workQueueService: WorkQueueService
  ) {
    this.getWorkQueue$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(workQueueGetLoad),
        tap(() => console.log('WorkQueueEffects: Caught workQueueGetLoad action')),
        switchMap(() => {
          return this.workQueueService.getWorkQueue().pipe(
            tap(items => console.log('WorkQueueEffects: received items from service:', items)),
            map((items) => {
                console.log('WorkQueueEffects: dispatching workQueueGetSuccess action');
                return workQueueGetSuccess({ items })
            }),
            catchError((err) => {
                console.error('WorkQueueEffects: error in getWorkQueue$', err);
                return of(workQueueGetFailure({ error: err }))
            })
          );
        })
      );
    });
  }
}