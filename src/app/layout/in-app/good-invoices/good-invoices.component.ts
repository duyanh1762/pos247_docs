import { Component } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';

@Component({
  selector: 'app-good-invoices',
  standalone: true,
  imports: [GeneralInstructionsComponent, StepComponent, HowComponent, DescComponent],
  templateUrl: './good-invoices.component.html',
  styleUrl: './good-invoices.component.css'
})
export class GoodInvoicesComponent {

}
