import { createReducer, on } from "@ngrx/store";
import { AccountDataItem } from "../../shared/interfaces/dashboard-interfaces/my-accounts";

import * as MyAcountGetActions from "./my-accounts.actions";

export interface MyAccountState {
    data: AccountDataItem[];
    loading: boolean;
    error: any;
  }

  export const initialState: MyAccountState = {
    data: [],
    loading: false,
    error: null
  }

  export const myAccountGetReducer = createReducer(
    initialState,
    on(MyAcountGetActions.MyAccountGetLoad, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(MyAcountGetActions.MyAccountGetSuccess, (state, {data}) => ({
        ...state,
        loading: false,
        data
    })),
    on(MyAcountGetActions.MyAccountGetGetFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    })),
  )

