import { Component } from '@angular/core';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [StepBoxComponent,GeneralInstructionsComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
