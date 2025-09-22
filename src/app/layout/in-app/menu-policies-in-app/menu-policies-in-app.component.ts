import { Component } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';

@Component({
  selector: 'app-menu-policies-in-app',
  standalone: true,
  imports: [GeneralInstructionsComponent,StepComponent,HowComponent,DescComponent],
  templateUrl: './menu-policies-in-app.component.html',
  styleUrl: './menu-policies-in-app.component.css'
})
export class MenuPoliciesInAppComponent {

}
