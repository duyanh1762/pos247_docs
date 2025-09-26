import { Component } from '@angular/core';
import { HowComponent } from '../../../shared/component/how/how.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';

@Component({
  selector: 'app-menu-editor',
  standalone: true,
  imports: [HowComponent, StepComponent, DescComponent],
  templateUrl: './menu-editor.component.html',
  styleUrl: './menu-editor.component.css'
})
export class MenuEditorComponent {

}
