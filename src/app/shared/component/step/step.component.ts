import { Component, Input } from '@angular/core';

@Component({
  selector: 'step',
  standalone: true,
  imports: [],
  templateUrl: './step.component.html',
  styleUrl: './step.component.css'
})
export class StepComponent {

  @Input()
  public index?: number;

}
