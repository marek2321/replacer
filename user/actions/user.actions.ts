import { createActionGroup, emptyProps } from '@ngrx/store';

export const {/flj/}Actions = createActionGroup({
    source: '{/acs/}',
    events: {
        'Get {/acs/}': emptyProps(),

        Clear: emptyProps(),
    },
});
