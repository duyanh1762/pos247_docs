import { Component } from '@angular/core';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';

@Component({
  selector: 'app-fee-in-app',
  standalone: true,
  imports: [StepBoxComponent,GeneralInstructionsComponent],
  templateUrl: './fee-in-app.component.html',
  styleUrl: './fee-in-app.component.css'
})
export class FeeInAppComponent {

}
