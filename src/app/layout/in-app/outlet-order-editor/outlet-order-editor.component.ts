import { Component } from '@angular/core';
import { HowComponent } from '../../../shared/component/how/how.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';

@Component({
  selector: 'app-outlet-order-editor',
  standalone: true,
  imports: [HowComponent,StepComponent,DescComponent],
  templateUrl: './outlet-order-editor.component.html',
  styleUrl: './outlet-order-editor.component.css'
})
export class OutletOrderEditorComponent {

}
