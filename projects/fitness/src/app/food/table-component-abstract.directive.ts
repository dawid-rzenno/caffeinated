import { Observable, takeUntil } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { ObservingComponentAbstract } from "./observing-component.abstract";
import { Directive, Input } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";
import { DefaultPageSize, DefaultPageSizeOptions, DefaultPagination, DefaultTotalItems } from "./pagination";

export type DBItem = {
  id?: number
}

export type Pagination = {
  pageIndex: number;
  previousPageIndex?: number | undefined;
  pageSize: number;
  length: number;
}

export type GetAllRequestData = Partial<Pagination> & {
  search?: string
}

export type TableComponentAbstractService<Item extends DBItem> = {
  delete(id: number): Observable<void>;
  getAll(data: GetAllRequestData): Observable<Item[]>;
}

@Directive()
export abstract class TableComponentAbstract<Item extends DBItem> extends ObservingComponentAbstract {
  abstract dataSource: Item[];

  @Input() permanentDelete: boolean = false;

  displayedColumns: string[] = ["id", "name", "description", "actions"];

  totalItems: number = DefaultTotalItems;
  pageSize: number = DefaultPageSize;
  pageSizeOptions: number[] = DefaultPageSizeOptions;

  currentPagination: Pagination = DefaultPagination

  protected constructor(
    private service: TableComponentAbstractService<Item>,
    private dialog: MatDialog
  ) {
    super();
  }

  onDeleteClick(item: Item): void {
    this.delete(item);
  }

  onRemoveClick(item: Item): void {
    this.remove(item);
  }

  onPageChange(pageEvent: PageEvent): void {
    this.currentPagination = pageEvent;
    this.getAll(pageEvent);
  }

  private delete(item: Item): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { title: "Delete item", content: "Are you sure you want to delete this item? This is a permanent action.", buttonText: "Delete" },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && item.id) {
        this.service
          .delete(item.id)
          .pipe(takeUntil(this.destroy$))
          .subscribe(() => this.getAll(this.currentPagination));
      }
    });
  }

  private remove(item: Item): void {
    this.dataSource = this.dataSource.filter(value => value.id !== item.id);
  }

  private getAll(page: Pagination): void {
    this.service
      .getAll(page)
      .pipe(takeUntil(this.destroy$))
      .subscribe((item: Item[]) => this.dataSource = item);
  }
}

@Directive()
export abstract class RoutedTableComponentAbstract<Item extends DBItem> {
  dataSource: Item[] = this.route.snapshot.data['items'];

  protected constructor(private route: ActivatedRoute) {}
}
