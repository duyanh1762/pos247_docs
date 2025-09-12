import { Component } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';

@Component({
  selector: 'app-qr-scanner',
  standalone: true,
  imports: [GeneralInstructionsComponent,StepBoxComponent],
  templateUrl: './qr-scanner.component.html',
  styleUrl: './qr-scanner.component.css'
})
export class QrScannerComponent {

}
