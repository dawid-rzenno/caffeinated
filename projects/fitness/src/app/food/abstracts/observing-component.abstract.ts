import { Directive, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Directive()
export abstract class ObservingComponentAbstract implements OnDestroy {
  protected destroy$: Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
