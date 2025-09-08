import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-step-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-box.component.html',
  styleUrl: './step-box.component.css'
})
export class StepBoxComponent {
  @Input()
  public expanded: boolean = false;

}
