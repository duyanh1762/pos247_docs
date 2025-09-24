import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'step',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './step.component.html',
  styleUrl: './step.component.css'
})
export class StepComponent {

  @Input()
  public index?: number;

}
