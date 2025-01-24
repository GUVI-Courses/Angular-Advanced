import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selecteCounterState = (state: AppState) => state.counter;
export const selectCount = createSelector(selecteCounterState, (state) => state.count);
