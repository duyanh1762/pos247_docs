import { Component } from '@angular/core';
import { HowComponent } from '../../../shared/component/how/how.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';

@Component({
  selector: 'app-collections-editor',
  standalone: true,
  imports: [HowComponent, StepComponent, DescComponent],
  templateUrl: './collections-editor.component.html',
  styleUrl: './collections-editor.component.css'
})
export class CollectionsEditorComponent {

}
