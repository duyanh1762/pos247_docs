import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { StepComponent } from '../../../shared/component/step/step.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';

@Component({
  selector: 'app-retail-order-in-app',
  standalone: true,
  imports: [NgIf, StepComponent,HowComponent,DescComponent,GeneralInstructionsComponent],
  templateUrl: './retail-order-in-app.component.html',
  styleUrl: './retail-order-in-app.component.css',
})
export class RetailOrderInAppComponent {
  constructor() {}

  isMobile: boolean = false;

  ngOnInit(): void {
    const uaData = (navigator as any).userAgentData;

    if (uaData) {
      this.isMobile = uaData.mobile;
    } else {
      this.detectByUserAgentFallback();
    }

    console.log(this.isMobile);
  }

  detectByUserAgentFallback() {
    this.isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
}
