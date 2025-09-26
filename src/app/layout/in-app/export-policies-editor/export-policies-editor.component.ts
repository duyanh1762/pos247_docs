import { Component } from '@angular/core';
import { HowComponent } from '../../../shared/component/how/how.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { StepComponent } from '../../../shared/component/step/step.component';

@Component({
  selector: 'app-export-policies-editor',
  standalone: true,
  imports: [HowComponent, DescComponent, StepComponent],
  templateUrl: './export-policies-editor.component.html',
  styleUrl: './export-policies-editor.component.css'
})
export class ExportPoliciesEditorComponent {

}
