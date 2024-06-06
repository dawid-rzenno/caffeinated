import { ActivatedRoute } from "@angular/router";

export abstract class DetailsComponentAbstract<T> {
  details: T = this.route.snapshot.data['meal'];

  protected constructor(private route: ActivatedRoute) {}
}
