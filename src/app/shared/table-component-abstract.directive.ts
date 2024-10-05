import { Observable, takeUntil } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { ObservingComponentAbstract } from "./abstracts/observing-component.abstract";
import { Directive } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";
import { MatPaginatorConfig, PaginationParams } from "./models/mat-paginator-config";
import { PaginatedResponse } from "./models/paginated-response";

export type DBItem = {
  id?: number
}

export type GetAllRequestParams = Partial<PaginationParams> & {
  search?: string;
  parentId?: number;
}

export type TableComponentAbstractService<Item extends DBItem> = {
  delete(id: number): Observable<void>;
  getAll(params: GetAllRequestParams): Observable<PaginatedResponse<Item>>;
}

@Directive()
export abstract class TableComponentAbstract<Item extends DBItem> extends ObservingComponentAbstract {
  dataSource: Item[] = [];

  displayedColumns: string[] = ["id", "name", "description", "actions"];
  pageSizeOptions: number[] = MatPaginatorConfig.DefaultPageSizeOptions;

  matPaginatorConfig: MatPaginatorConfig;

  protected constructor(
    private service: TableComponentAbstractService<Item>,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    super();

    const paginatedResponse: PaginatedResponse<Item> = this.route.snapshot.data['paginatedResponse'];
    this.matPaginatorConfig = paginatedResponse.createMatPaginatorConfig();
    this.dataSource = paginatedResponse.content;
  }

  onDeleteClick(item: Item): void {
    this.delete(item);
  }

  onPageChange(pageEvent: PageEvent): void {
    this.matPaginatorConfig = new MatPaginatorConfig(pageEvent.pageIndex, pageEvent.pageSize, pageEvent.length);
    this.getAll(this.matPaginatorConfig.createPaginationParams());
  }

  private delete(item: Item): void {
    const dialogRef: MatDialogRef<ConfirmationDialogComponent, unknown> = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: "Delete item",
        content: "Are you sure you want to delete this item? This is a permanent action.",
        buttonText: "Delete"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && item.id) {
        this.service
          .delete(item.id)
          .pipe(takeUntil(this.destroy$))
          .subscribe(() => this.getAll(this.matPaginatorConfig.createPaginationParams()));
      }
    });
  }

  private getAll(params: GetAllRequestParams): void {
    this.service
      .getAll(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: PaginatedResponse<Item>) => {
        this.matPaginatorConfig = response.createMatPaginatorConfig();
        this.dataSource = response.content;
      });
  }
}
