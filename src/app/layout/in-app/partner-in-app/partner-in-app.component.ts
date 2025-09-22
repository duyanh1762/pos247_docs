import { Component } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { StepComponent } from '../../../shared/component/step/step.component';

@Component({
  selector: 'app-partner-in-app',
  standalone: true,
  imports: [GeneralInstructionsComponent,DescComponent,HowComponent,StepComponent],
  templateUrl: './partner-in-app.component.html',
  styleUrl: './partner-in-app.component.css'
})
export class PartnerInAppComponent {

}
