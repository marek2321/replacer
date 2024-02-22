import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { {/flj/}Actions } from "../actions/{/ald/}.actions";

@Injectable()
export class {/acj/}Effects {
  private readonly actions$ = inject(Actions);

  get{/acj/}$ = createEffect(() => {
    return this.actions$.pipe(
      ofType({/flj/}Actions.get{/acj/}),
      tap(() => {})
    );
  });
}
