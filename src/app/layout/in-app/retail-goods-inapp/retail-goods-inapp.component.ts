import { Component } from '@angular/core';
import { StepComponent } from '../../../shared/component/step/step.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-retail-goods-inapp',
  standalone: true,
  imports: [
    StepComponent,
    DescComponent,
    HowComponent,
    GeneralInstructionsComponent,
    NgIf,
  ],
  templateUrl: './retail-goods-inapp.component.html',
  styleUrl: './retail-goods-inapp.component.css',
})
export class RetailGoodsInappComponent {
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
