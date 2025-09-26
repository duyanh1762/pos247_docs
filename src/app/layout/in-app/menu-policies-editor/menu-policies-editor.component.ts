import { Component } from '@angular/core';
import { StepComponent } from '../../../shared/component/step/step.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';

@Component({
  selector: 'app-menu-policies-editor',
  standalone: true,
  imports: [StepComponent, HowComponent, DescComponent],
  templateUrl: './menu-policies-editor.component.html',
  styleUrl: './menu-policies-editor.component.css'
})
export class MenuPoliciesEditorComponent {

}
