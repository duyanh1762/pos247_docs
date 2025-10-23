import { Component } from '@angular/core';
import { HowComponent } from '../../../shared/component/how/how.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';

@Component({
  selector: 'app-affiliate',
  standalone: true,
  imports: [HowComponent, DescComponent,StepComponent,GeneralInstructionsComponent],
  templateUrl: './affiliate.component.html',
  styleUrl: './affiliate.component.css'
})
export class AffiliateComponent {

}
