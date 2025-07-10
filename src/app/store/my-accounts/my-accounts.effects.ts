import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MyAccountsService } from "../../pages/dashboard/components/my-accounts/my-accounts.service";

import {
    MyAccountGetLoad,
    MyAccountGetSuccess,
    MyAccountGetGetFailure
  } from './my-accounts.actions';
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class MyAccountGetEffects {
    readonly getMyAccounts$;
    constructor(
        private actions$: Actions,
        private myAccountsService: MyAccountsService
    ) {
        this.getMyAccounts$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(MyAccountGetLoad),
                switchMap(() =>
                    this.myAccountsService.getMyAccounts()
                    .pipe( 
                        map(data => MyAccountGetSuccess({ data })),
                        catchError((error) => {
                            console.error('MyAccountsGetEffect: error in getMyAccounts$', error);
                            return of(MyAccountGetGetFailure({ error }))
                        })
                    )
                )
            );
        })
    }
}