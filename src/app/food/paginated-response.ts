import { MatPaginatorConfig } from "./mat-paginator-config";

export type Sort = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

export type Pageable = {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

type PaginatedResponseArgs<T> = Omit<PaginatedResponse<T>, 'createMatPaginatorConfig'>

export class PaginatedResponse<T> {
  totalElements: number;
  totalPages: number;
  size: number;
  content: T[];
  number: number;
  sort: Sort;
  numberOfElements: number;
  pageable: Pageable;
  first: boolean;
  last: boolean;
  empty: boolean;

  constructor(args: PaginatedResponseArgs<T>) {
    this.totalElements = args.totalElements;
    this.totalPages = args.totalPages;
    this.size = args.size;
    this.content = args.content;
    this.number = args.number;
    this.sort = args.sort;
    this.numberOfElements = args.numberOfElements;
    this.pageable = args.pageable;
    this.first = args.first;
    this.last = args.last;
    this.empty = args.empty;
  }

  createMatPaginatorConfig(): MatPaginatorConfig {
    return new MatPaginatorConfig(this.pageable.pageNumber, this.pageable.pageSize, this.totalElements)
  }
}
