import { createReducer, on } from "@ngrx/store";
import { WorkQueueItem } from "../../shared/interfaces/dashboard-interfaces/work-queue.interface";

import * as WorkQueueActions from "./work-queue.actions";

export interface WorkQueueGetState {
    items: WorkQueueItem[];
    loading: boolean;
    error: any;
  }

  export const initialState: WorkQueueGetState = {
    items: [],
    loading: false,
    error: null
  }
export const workQueueGetReducer = createReducer(
    initialState,
    on(WorkQueueActions.workQueueGetLoad, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(WorkQueueActions.workQueueGetSuccess, (state, {items}) => ({
        ...state,
        loading: false, 
        items
    })),
    on(WorkQueueActions.workQueueGetFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    }))
)