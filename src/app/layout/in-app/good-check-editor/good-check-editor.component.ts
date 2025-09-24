import { Component } from '@angular/core';
import { StepComponent } from '../../../shared/component/step/step.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';

@Component({
  selector: 'app-good-check-editor',
  standalone: true,
  imports: [StepComponent,HowComponent,DescComponent],
  templateUrl: './good-check-editor.component.html',
  styleUrl: './good-check-editor.component.css'
})
export class GoodCheckEditorComponent {

}
