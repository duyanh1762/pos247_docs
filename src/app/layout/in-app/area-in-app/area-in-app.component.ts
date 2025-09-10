import { Component } from '@angular/core';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';

@Component({
  selector: 'app-area-in-app',
  standalone: true,
  imports: [StepBoxComponent,GeneralInstructionsComponent],
  templateUrl: './area-in-app.component.html',
  styleUrl: './area-in-app.component.css'
})
export class AreaInAppComponent {

}
