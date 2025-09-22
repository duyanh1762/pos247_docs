import { Component } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { HowComponent } from '../../../shared/component/how/how.component';

@Component({
  selector: 'app-report-activity',
  standalone: true,
  imports: [GeneralInstructionsComponent,DescComponent,StepComponent,HowComponent],
  templateUrl: './report-activity.component.html',
  styleUrl: './report-activity.component.css'
})
export class ReportActivityComponent {

}
