import { Component } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { IconHelpComponent } from '../../../shared/component/icon-help/icon-help.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [GeneralInstructionsComponent,IconHelpComponent,HowComponent,StepComponent,DescComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
