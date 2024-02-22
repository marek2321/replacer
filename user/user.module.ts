import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { {/key/}_FEATURE_KEY } from './keys';
import { {/flj/}Reducer } from './reducers/{/ald/}.reducer';
import { {/acj/}Effects } from './effects/{/ald/}.effects';

@NgModule({
    imports: [CommonModule, StoreModule.forFeature({/key/}_FEATURE_KEY, {/flj/}Reducer), EffectsModule.forFeature([{/acj/}Effects])],
})
export class {/acj/}StoreModule {}
