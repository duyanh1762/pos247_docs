import { Component } from '@angular/core';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';

@Component({
  selector: 'app-menu-policies-in-app',
  standalone: true,
  imports: [StepBoxComponent,GeneralInstructionsComponent],
  templateUrl: './menu-policies-in-app.component.html',
  styleUrl: './menu-policies-in-app.component.css'
})
export class MenuPoliciesInAppComponent {

}
