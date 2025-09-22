import { Component } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { NoteComponent } from '../../../shared/component/note/note.component';

@Component({
  selector: 'app-debts-in-app',
  standalone: true,
  imports: [GeneralInstructionsComponent,StepComponent,HowComponent,DescComponent,NoteComponent],
  templateUrl: './debts-in-app.component.html',
  styleUrl: './debts-in-app.component.css'
})
export class DebtsInAppComponent {

}
