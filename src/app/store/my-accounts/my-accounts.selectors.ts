import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MyAccountState } from "./my-accounts.reducer";

export const selectMyAccountseGetState = createFeatureSelector<MyAccountState>('myAccount');

export const selectMyAccountGetItems = createSelector(
    selectMyAccountseGetState,
    (state) => state.data
)