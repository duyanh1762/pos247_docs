import { Component } from '@angular/core';
import { StepComponent } from '../../../shared/component/step/step.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { HowComponent } from '../../../shared/component/how/how.component';

@Component({
  selector: 'app-report-finance-group',
  standalone: true,
  imports:[StepComponent,HowComponent,DescComponent,GeneralInstructionsComponent],
  templateUrl: './report-finance-group.component.html',
  styleUrl: './report-finance-group.component.css'
})
export class ReportFinanceGroupComponent {

}
