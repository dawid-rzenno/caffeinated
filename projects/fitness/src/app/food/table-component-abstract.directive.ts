import { Observable, takeUntil } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { ObservingComponentAbstract } from "./observing-component.abstract";
import { Directive, Input } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";
import { MatPaginatorConfig, PaginationParams } from "./mat-paginator-config";
import { PaginatedResponse } from "./paginated-response";

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
  @Input({ transform: (value: any[] | null) => value ?? []}) dataSource: Item[] = [];
  @Input() permanentDelete: boolean = false;
  @Input() parentId: number | undefined;

  displayedColumns: string[] = ["id", "name", "description", "actions"];
  pageSizeOptions: number[] = MatPaginatorConfig.DefaultPageSizeOptions;

  matPaginatorConfig: MatPaginatorConfig;

  protected constructor(
    private service: TableComponentAbstractService<Item>,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {
    super();

    const paginatedResponse: PaginatedResponse<Item> = this.route.snapshot.data['paginatedResponse'];

    // paginatedResponse won't be defined if a component is a child of parent component
    if (paginatedResponse) {
      this.matPaginatorConfig = paginatedResponse.createMatPaginatorConfig();
      this.dataSource = paginatedResponse.content
    } else {
      this.matPaginatorConfig = new MatPaginatorConfig();
    }
  }

  onDeleteClick(item: Item): void {
    this.delete(item);
  }

  onRemoveClick(item: Item): void {
    this.remove(item);
  }

  onPageChange(pageEvent: PageEvent): void {
    this.matPaginatorConfig = new MatPaginatorConfig(pageEvent.pageIndex, pageEvent.pageSize, pageEvent.length);
    this.getAll(this.matPaginatorConfig.createPaginationParams());
  }

  private delete(item: Item): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
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

  private remove(item: Item): void {
    this.dataSource = this.dataSource.filter(value => value.id !== item.id);
  }

  private getAll(params: GetAllRequestParams): void {
    if (this.parentId) {
      params.parentId = this.parentId;
    }

    this.service
      .getAll(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: PaginatedResponse<Item>) => {
        this.matPaginatorConfig = response.createMatPaginatorConfig();
        this.dataSource = response.content;
      });
  }
}
