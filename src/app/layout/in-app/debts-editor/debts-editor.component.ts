import { Component } from '@angular/core';
import { StepComponent } from '../../../shared/component/step/step.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';

@Component({
  selector: 'app-debts-editor',
  standalone: true,
  imports: [StepComponent,HowComponent,DescComponent],
  templateUrl: './debts-editor.component.html',
  styleUrl: './debts-editor.component.css'
})
export class DebtsEditorComponent {

}
