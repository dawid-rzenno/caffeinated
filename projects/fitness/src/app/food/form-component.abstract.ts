import { ActivatedRoute } from "@angular/router";
import { debounceTime, mergeMap, Observable, takeUntil } from "rxjs";
import { FormControl, UntypedFormGroup } from "@angular/forms";
import { Directive, OnInit } from "@angular/core";
import { ObservingComponentAbstract } from "./observing-component.abstract";

export type FormComponentAbstractService<ItemDetails> = {
  create(item: ItemDetails): Observable<ItemDetails>;
}

export type SearchComponentAbstractService<Item> = {
  getAll(filter: string): Observable<Item[]>;
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
      mergeMap((value: string) => service.getAll(value)),
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
    this.service.create(this.formGroup.getRawValue())
  }

  onResetClick(): void {
    this.formGroup.reset(this.defaultFormGroupValue)
  }
}
