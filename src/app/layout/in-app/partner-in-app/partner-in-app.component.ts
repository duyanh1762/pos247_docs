import { Component, OnInit } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-partner-in-app',
  standalone: true,
  imports: [
    GeneralInstructionsComponent,
    DescComponent,
    HowComponent,
    StepComponent,
    NgIf,
  ],
  templateUrl: './partner-in-app.component.html',
  styleUrl: './partner-in-app.component.css',
})
export class PartnerInAppComponent implements OnInit {
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
