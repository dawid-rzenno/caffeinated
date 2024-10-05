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
  static DefaultPageSizeOptions: number[] = [5, 10, 25, 100];
  static DefaultPageSize: number = this.DefaultPageSizeOptions[1];

  constructor(pageIndex?: number, pageSize?: number, length?: number) {
    this.pageIndex = pageIndex ?? MatPaginatorConfig.DefaultPageIndex;
    this.pageSize = pageSize ?? MatPaginatorConfig.DefaultPageSize;
    this.length = length ?? MatPaginatorConfig.DefaultTotalItems;
  }

  static get defaultPaginationParams(): PaginationParams {
    return {
      page: MatPaginatorConfig.DefaultPageIndex,
      size: MatPaginatorConfig.DefaultPageSize
    }
  }

  get paginationParams(): PaginationParams {
    return {
      page: this.pageIndex,
      size: this.pageSize
    }
  }
}



