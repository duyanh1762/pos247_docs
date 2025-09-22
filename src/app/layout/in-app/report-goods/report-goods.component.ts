import { Component } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { StepComponent } from '../../../shared/component/step/step.component';

@Component({
  selector: 'app-report-goods',
  standalone: true,
  imports: [GeneralInstructionsComponent,HowComponent,DescComponent,StepComponent],
  templateUrl: './report-goods.component.html',
  styleUrl: './report-goods.component.css'
})
export class ReportGoodsComponent {

}
