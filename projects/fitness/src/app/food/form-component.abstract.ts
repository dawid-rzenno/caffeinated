import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { UntypedFormGroup } from "@angular/forms";
import { Directive, OnInit } from "@angular/core";

export type FormComponentAbstractService<ItemDetails> = {
  create(item: ItemDetails): Observable<ItemDetails>;
}

@Directive()
export abstract class FormComponentAbstract<ItemDetails> implements OnInit {
  abstract formGroup: UntypedFormGroup;
  abstract defaultFormGroupValue: ItemDetails;

  protected constructor(private route: ActivatedRoute, private service: FormComponentAbstractService<ItemDetails>) {}

  ngOnInit(): void {
    this.formGroup.patchValue(this.route.snapshot.data['details']);
  }

  onCreateClick(): void {
    this.service.create(this.formGroup.getRawValue())
  }

  onResetClick(): void {
    this.formGroup.reset(this.defaultFormGroupValue)
  }
}
