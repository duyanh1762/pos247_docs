import { Component, OnInit } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-staff-in-app',
  standalone: true,
  imports: [
    GeneralInstructionsComponent,
    HowComponent,
    StepComponent,
    DescComponent,
    NgIf,
  ],
  templateUrl: './staff-in-app.component.html',
  styleUrl: './staff-in-app.component.css',
})
export class StaffInAppComponent implements OnInit {
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
