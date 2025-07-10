import { createAction, props } from "@ngrx/store";
import { WorkQueueItem } from "../../shared/interfaces/dashboard-interfaces/work-queue.interface";

export const workQueueGetLoad = createAction(
    '[WorkQueueGet: Load]',
)
export const workQueueGetSuccess = createAction(
    '[WorkQueueGet: Success]',
    props<{items: WorkQueueItem[]}>()
);
export const workQueueGetFailure = createAction(
    '[WorkQueueGet: Failure]',
    props<{error: any}>()
);