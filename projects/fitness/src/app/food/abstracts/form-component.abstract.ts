import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { UntypedFormGroup } from "@angular/forms";

export type FormComponentAbstractService<ItemDetails> = {
  create(item: ItemDetails): Observable<ItemDetails>;
}

export abstract class FormComponentAbstract<ItemDetails> {
  details: ItemDetails = this.route.snapshot.data['details'];
  abstract formGroup: UntypedFormGroup;
  abstract defaultFormGroupValue: ItemDetails;

  protected constructor(private route: ActivatedRoute, private service: FormComponentAbstractService<ItemDetails>) {}

  onCreateClick(): void {
    this.service.create(this.formGroup.getRawValue())
  }

  onResetClick(): void {
    this.formGroup.reset(this.defaultFormGroupValue)
  }
}
