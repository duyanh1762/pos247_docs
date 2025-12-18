import { Component, OnInit } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-report-activity',
  standalone: true,
  imports: [
    GeneralInstructionsComponent,
    DescComponent,
    StepComponent,
    HowComponent,
    NgIf,
  ],
  templateUrl: './report-activity.component.html',
  styleUrl: './report-activity.component.css',
})
export class ReportActivityComponent implements OnInit {
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
