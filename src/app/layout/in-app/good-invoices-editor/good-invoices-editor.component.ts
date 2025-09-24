import { Component } from '@angular/core';
import { HowComponent } from '../../../shared/component/how/how.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';

@Component({
  selector: 'app-good-invoices-editor',
  standalone: true,
  imports: [HowComponent, StepComponent, DescComponent],
  templateUrl: './good-invoices-editor.component.html',
  styleUrl: './good-invoices-editor.component.css'
})
export class GoodInvoicesEditorComponent {

}
