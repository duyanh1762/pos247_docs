import { Component } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';

@Component({
  selector: 'app-debts-in-app',
  standalone: true,
  imports: [GeneralInstructionsComponent,StepBoxComponent],
  templateUrl: './debts-in-app.component.html',
  styleUrl: './debts-in-app.component.css'
})
export class DebtsInAppComponent {

}
