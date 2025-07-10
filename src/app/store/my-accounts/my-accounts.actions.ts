import { createAction, props } from "@ngrx/store";
import { AccountDataItem } from "../../shared/interfaces/dashboard-interfaces/my-accounts";

export const MyAccountGetLoad = createAction(
    '[My Account Get] Load'
  );
  
  export const MyAccountGetSuccess = createAction(
    '[My Account Get] Success',
    props<{ data: AccountDataItem[] }>()
  );
  
  export const MyAccountGetGetFailure = createAction(
    '[My Account Get] Failure',
    props<{ error: any }>()
  );