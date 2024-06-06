import { ActivatedRoute } from "@angular/router";
import { Directive } from "@angular/core";

@Directive()
export abstract class DetailsComponentAbstract<ItemDetails> {
  details: ItemDetails = this.route.snapshot.data['details'];

  protected constructor(private route: ActivatedRoute) {}
}
