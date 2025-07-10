import { createFeatureSelector, createSelector } from "@ngrx/store";
import { WorkQueueGetState } from "./work-queue.reducer";

export const selectWorkQueueGetState = createFeatureSelector<WorkQueueGetState>('workQueue');

export const selectWorkQueueGetItems = createSelector(
    selectWorkQueueGetState,
    (state) => state.items
)