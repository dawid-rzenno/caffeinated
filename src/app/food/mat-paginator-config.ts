export type PaginationParams = {
  size: number,
  page: number
}

export class MatPaginatorConfig {
  pageIndex: number;
  pageSize: number;
  length: number;

  static DefaultPageIndex: number = 0;
  static DefaultTotalItems: number = 0;
  static DefaultPageSize: number = 10;
  static DefaultPageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(pageIndex?: number, pageSize?: number, length?: number) {
    this.pageIndex = pageIndex ?? MatPaginatorConfig.DefaultPageIndex;
    this.pageSize = pageSize ?? MatPaginatorConfig.DefaultPageSize;
    this.length = length ?? MatPaginatorConfig.DefaultTotalItems;
  }

  createPaginationParams(): PaginationParams {
    return {
      page: this.pageIndex,
      size: this.pageSize
    }
  }
}



