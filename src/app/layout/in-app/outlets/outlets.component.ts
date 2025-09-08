import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';

@Component({
  selector: 'app-outlets',
  standalone: true,
  imports: [StepBoxComponent],
  templateUrl: './outlets.component.html',
  styleUrl: './outlets.component.css'
})
export class OutletsComponent {
  openModal(e:HTMLElement){
    e.style.display = "block";
  }

}
