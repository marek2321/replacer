import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { {/flj/}Actions } from "../actions/{/ald/}.actions";
import { select{/acj/} } from "../selectors/{/ald/}.selector";

@Injectable({
  providedIn: "root",
})
export class {/acj/}Facade {
  private readonly store = inject(Store);

  {/flj/}$ = this.store.select(select{/acj/});

  get{/acj/}(): void {
    this.store.dispatch({/flj/}Actions.get{/acj/}());
  }

  clear(): void {
    this.store.dispatch({/flj/}Actions.clear());
  }
}
