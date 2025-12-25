import { Component } from '@angular/core';
import { HowComponent } from '../../../shared/component/how/how.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';

@Component({
  selector: 'app-customer-in-app',
  standalone: true,
  imports: [HowComponent, StepComponent,DescComponent,GeneralInstructionsComponent],
  templateUrl: './customer-in-app.component.html',
  styleUrl: './customer-in-app.component.css'
})
export class CustomerInAppComponent {

}
