import { createFeatureSelector, createSelector } from '@ngrx/store';
import { {/acj/}State } from '../reducers/{/ald/}.reducer';
import { {/key/}_FEATURE_KEY } from '../keys';

const selectState = createFeatureSelector<{/acj/}State>({/key/}_FEATURE_KEY);

const select{/acj/} = createSelector(selectState, (state: {/acj/}State) => state.{/flj/});

export { select{/acj/} };
