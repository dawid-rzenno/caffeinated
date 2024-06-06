import { Component } from '@angular/core';
import { FormComponentAbstract } from "../form-component.abstract";

@Component({
  selector: 'app-diet-form',
  standalone: true,
  imports: [],
  templateUrl: './diet-form.component.html',
  styleUrl: './diet-form.component.scss'
})
export class DietFormComponent extends FormComponentAbstract {

}
