import { Component } from '@angular/core';
import { StepComponent } from '../../../shared/component/step/step.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';

@Component({
  selector: 'app-report-activity-group',
  standalone: true,
  imports: [StepComponent,DescComponent,HowComponent,GeneralInstructionsComponent],
  templateUrl: './report-activity-group.component.html',
  styleUrl: './report-activity-group.component.css'
})
export class ReportActivityGroupComponent {

}
