import { createReducer, on } from "@ngrx/store";
import { {/flj/}Actions } from "../actions/{/ald/}.actions";

export interface {/acj/}State {
  {/flj/}: unknown | null;
}

export const initialState: {/acj/}State = {
  {/flj/}: null,
};

export const {/flj/}Reducer = createReducer(
  initialState,
  on({/flj/}Actions.get{/acj/}, (state): {/acj/}State => ({ ...state })),

  on({/flj/}Actions.clear, (): {/acj/}State => ({ ...initialState }))
);
