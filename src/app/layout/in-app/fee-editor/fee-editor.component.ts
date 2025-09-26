import { Component } from '@angular/core';
import { HowComponent } from '../../../shared/component/how/how.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';

@Component({
  selector: 'app-fee-editor',
  standalone: true,
  imports: [HowComponent, StepComponent, DescComponent],
  templateUrl: './fee-editor.component.html',
  styleUrl: './fee-editor.component.css'
})
export class FeeEditorComponent {

}
