import { Observable, takeUntil } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { ObservingComponentAbstract } from "./observing-component.abstract";
import { Directive, Input } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";
import {
  DefaultPageSizeOptions,
  DefaultPagination,
  PaginatedResponse,
  Pagination,
  PaginationRequestParams,
  PaginationResponseToPagination,
  PaginationToPaginationRequest
} from "./pagination";

export type DBItem = {
  id?: number
}

export type GetAllRequestParams = PaginationRequestParams & {
  search?: string;
}

export type TableComponentAbstractService<Item extends DBItem> = {
  delete(id: number): Observable<void>;
  getAll(params: GetAllRequestParams): Observable<PaginatedResponse<Item>>;
}

@Directive()
export abstract class TableComponentAbstract<Item extends DBItem> extends ObservingComponentAbstract {
  @Input({ transform: (value: any[] | null) => value ?? []}) dataSource: Item[] = [];
  @Input() permanentDelete: boolean = false;

  displayedColumns: string[] = ["id", "name", "description", "actions"];
  pageSizeOptions: number[] = DefaultPageSizeOptions;

  currentPagination: Pagination = DefaultPagination

  protected constructor(
    private service: TableComponentAbstractService<Item>,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {
    super();

    const paginatedResponse: PaginatedResponse<Item> = this.route.snapshot.data['paginatedResponse'];

    if (paginatedResponse) {
      this.currentPagination = PaginationResponseToPagination(paginatedResponse.pagination);
      this.dataSource = paginatedResponse.results
    }
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

  private getAll(pagination: Pagination): void {
    this.service
      .getAll(PaginationToPaginationRequest(pagination))
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: PaginatedResponse<Item>) => {
        this.currentPagination = PaginationResponseToPagination(response.pagination)
        this.dataSource = response.results;
      });
  }
}
