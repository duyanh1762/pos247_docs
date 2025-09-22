import { Component } from '@angular/core';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { StepComponent } from '../../../shared/component/step/step.component';

@Component({
  selector: 'app-general-instructions',
  standalone: true,
  imports: [StepBoxComponent,HowComponent,DescComponent,StepComponent],
  templateUrl: './general-instructions.component.html',
  styleUrl: './general-instructions.component.css'
})
export class GeneralInstructionsComponent {

}
