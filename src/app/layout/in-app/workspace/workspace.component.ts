import { Component } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { StepComponent } from '../../../shared/component/step/step.component';

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [GeneralInstructionsComponent, StepComponent, DescComponent, HowComponent],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.css'
})
export class WorkspaceComponent {
}
