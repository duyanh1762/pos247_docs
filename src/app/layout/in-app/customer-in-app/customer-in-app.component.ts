import { Component } from '@angular/core';
import { HowComponent } from '../../../shared/component/how/how.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-customer-in-app',
  standalone: true,
  imports: [
    HowComponent,
    StepComponent,
    DescComponent,
    GeneralInstructionsComponent,
    NgIf
  ],
  templateUrl: './customer-in-app.component.html',
  styleUrl: './customer-in-app.component.css',
})
export class CustomerInAppComponent {
  constructor() {}

  isMobile: boolean = false;

  ngOnInit(): void {
    const uaData = (navigator as any).userAgentData;

    if (uaData) {
      this.isMobile = uaData.mobile;
    } else {
      this.detectByUserAgentFallback();
    }
  }

  detectByUserAgentFallback() {
    this.isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
}
