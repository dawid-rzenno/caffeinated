import { ActivatedRoute } from "@angular/router";
import { debounceTime, map, mergeMap, Observable, takeUntil } from "rxjs";
import { FormControl, UntypedFormGroup } from "@angular/forms";
import { Directive, OnInit } from "@angular/core";
import { ObservingComponentAbstract } from "./observing-component.abstract";
import { GetAllRequestParams } from "./table-component-abstract.directive";
import { PaginatedResponse } from "./pagination";

export type FormComponentAbstractService<ItemDetails> = {
  create(item: ItemDetails): Observable<ItemDetails>;
}

export type SearchComponentAbstractService<Item> = {
  getAll(data: GetAllRequestParams): Observable<PaginatedResponse<Item>>;
}

export function PaginatedResponseToResults<Item>(response: PaginatedResponse<Item>): Item[] {
  return response.results;
}

@Directive()
export abstract class FormComponentAbstract<ItemDetails extends Record<string, any>> extends ObservingComponentAbstract implements OnInit {
  abstract formGroup: UntypedFormGroup;
  abstract defaultFormGroupValue: ItemDetails;

  readonly details: ItemDetails | undefined = this.route.snapshot.data['details'];

  protected constructor(private route: ActivatedRoute, private service: FormComponentAbstractService<ItemDetails>) {
    super();
  }

  createAutocompleteOptions$<T>(searchFormControl: FormControl<string>, service: SearchComponentAbstractService<T>): Observable<T[]> {
    return searchFormControl.valueChanges.pipe(
      debounceTime(250),
      mergeMap((search: string) => service.getAll({ search })),
      map((response: PaginatedResponse<T>) => response.results),
      takeUntil(this.destroy$)
    )
  }

  optionToNameMapper<T extends {name: string}>(value: T) {
    return value.name
  }

  ngOnInit(): void {
    if (this.details) {
      this.formGroup.patchValue(this.details);
    }
  }

  onCreateClick(): void {
    this.service.create(this.formGroup.getRawValue()).subscribe()
  }

  onResetClick(): void {
    this.formGroup.reset(this.defaultFormGroupValue)
  }
}
