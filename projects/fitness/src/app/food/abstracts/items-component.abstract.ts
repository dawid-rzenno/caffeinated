import { Observable, takeUntil } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { ObservingComponentAbstract } from "./observing-component.abstract";
import { Directive } from "@angular/core";

export type DBItem = {
  id: string
}

export interface ItemsComponentAbstractService<Item extends DBItem> {
  delete(id: string): Observable<void>;
  getAll(): Observable<Item[]>;
}

@Directive()
export abstract class ItemsComponentAbstract<Item extends DBItem> extends ObservingComponentAbstract {
  items: Item[] = this.route.snapshot.data['items'];

  protected constructor(private route: ActivatedRoute, private service: ItemsComponentAbstractService<Item>) {
    super();
  }

  delete(id: string): void {
    this.service.delete(id).pipe(takeUntil(this.destroy$)).subscribe(() => this.getAll());
  }

  getAll(): void {
    this.service.getAll().pipe(takeUntil(this.destroy$)).subscribe((item: Item[]) => this.items = item);
  }
}
