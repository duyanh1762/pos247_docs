import { Component } from '@angular/core';
import { StepComponent } from '../../../shared/component/step/step.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';

@Component({
  selector: 'app-report-goods-group',
  standalone: true,
  imports: [StepComponent,HowComponent,DescComponent,GeneralInstructionsComponent],
  templateUrl: './report-goods-group.component.html',
  styleUrl: './report-goods-group.component.css'
})
export class ReportGoodsGroupComponent {

}
