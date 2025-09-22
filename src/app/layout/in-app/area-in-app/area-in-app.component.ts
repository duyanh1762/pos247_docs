import { Component } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { HowComponent } from '../../../shared/component/how/how.component';

@Component({
  selector: 'app-area-in-app',
  standalone: true,
  imports: [GeneralInstructionsComponent,StepComponent,DescComponent,HowComponent],
  templateUrl: './area-in-app.component.html',
  styleUrl: './area-in-app.component.css'
})
export class AreaInAppComponent {

}
