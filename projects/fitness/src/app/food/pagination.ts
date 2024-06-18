import { Pagination } from "./table-component-abstract.directive";

export const DefaultTotalItems: number = 0;
export const DefaultPageSize: number = 10;
export const DefaultPageSizeOptions: number[] = [5, 10, 25, 100];

export const DefaultPagination: Pagination = {
  pageIndex: 0,
  pageSize: DefaultPageSize,
  length: DefaultTotalItems
}
