import { Component, OnInit } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-goods-in-app',
  standalone: true,
  imports: [
    GeneralInstructionsComponent,
    StepComponent,
    DescComponent,
    HowComponent,
    NgIf,
  ],
  templateUrl: './goods-in-app.component.html',
  styleUrl: './goods-in-app.component.css',
})
export class GoodsInAppComponent implements OnInit {
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
