import { Observable, takeUntil } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { ObservingComponentAbstract } from "./observing-component.abstract";
import { Directive } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";

export type DBItem = {
  id: string
}

export type ItemsComponentAbstractService<Item extends DBItem> = {
  delete(id: string): Observable<void>;
  getAll(page: number): Observable<Item[]>;
}

@Directive()
export abstract class ItemsComponentAbstract<Item extends DBItem> extends ObservingComponentAbstract {
  items: Item[] = this.route.snapshot.data['items'];

  displayedColumns: string[] = ["id", "name", "description", "actions"];
  totalItems: number = 1;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100]

  protected constructor(
    private route: ActivatedRoute,
    private service: ItemsComponentAbstractService<Item>,
    private dialog: MatDialog
  ) {
    super();
  }

  private delete(item: Item): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { title: "Delete item", content: "Are you sure you want to delete this item?", buttonText: "Delete" },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service
          .delete(item.id)
          .pipe(takeUntil(this.destroy$))
          .subscribe(() => this.getAll());
      }
    });
  }

  private getAll(page: number = 1): void {
    this.service
      .getAll(page)
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: Item[]) => this.items = item);
  }

  onDeleteClick(item: Item): void {
    this.delete(item);
  }

  onPageChange(pageEvent: PageEvent): void {
    this.getAll(pageEvent.pageIndex);
  }
}
