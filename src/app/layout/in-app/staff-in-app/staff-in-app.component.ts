import { Component } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';

@Component({
  selector: 'app-staff-in-app',
  standalone: true,
  imports: [GeneralInstructionsComponent,HowComponent,StepComponent,DescComponent],
  templateUrl: './staff-in-app.component.html',
  styleUrl: './staff-in-app.component.css'
})
export class StaffInAppComponent {

}
