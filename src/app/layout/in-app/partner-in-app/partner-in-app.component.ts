import { Component } from '@angular/core';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';

@Component({
  selector: 'app-partner-in-app',
  standalone: true,
  imports: [StepBoxComponent,GeneralInstructionsComponent],
  templateUrl: './partner-in-app.component.html',
  styleUrl: './partner-in-app.component.css'
})
export class PartnerInAppComponent {

}
