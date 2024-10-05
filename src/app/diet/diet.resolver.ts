import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { Diet, DietDetails } from "./diet";
import { DietService } from "./diet.service";
import { PaginatedResponse } from "../shared/models/paginated-response";

export const dietResolver: ResolveFn<DietDetails | PaginatedResponse<Diet>> = (route) => {

  const id: string | null = route.paramMap.get('id');

  return id ? inject(DietService).get(id) : inject(DietService).getAll();
};
