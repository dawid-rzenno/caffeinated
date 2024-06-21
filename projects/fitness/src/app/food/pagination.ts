export const DefaultTotalItems: number = 0;
export const DefaultPageSize: number = 10;
export const DefaultPageSizeOptions: number[] = [5, 10, 25, 100];

export const DefaultPagination: Pagination = {
  pageIndex: 0,
  pageSize: DefaultPageSize,
  length: DefaultTotalItems
}

export type PaginationRequestParams = {
  page_size?: number,
  page?: number
}

export type PaginationResponse = Required<PaginationRequestParams> & {
  total: number
}

export type Pagination = {
  pageIndex: number,
  pageSize: number,
  length: number
}

export function PaginationResponseToPagination(response: PaginationResponse): Pagination {
  return {
    length: response.total,
    pageIndex: response.page - 1,
    pageSize: response.page_size
  }
}

export function PaginationToPaginationRequest(pagination: Pagination): PaginationRequestParams {
  return {
    page: pagination.pageIndex + 1,
    page_size: pagination.pageSize
  }
}

export type PaginatedResponse<T> = {
  pagination: PaginationResponse,
  results: T[]
}

