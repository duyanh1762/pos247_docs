import { Component, OnInit } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-report-goods',
  standalone: true,
  imports: [
    GeneralInstructionsComponent,
    HowComponent,
    DescComponent,
    StepComponent,
    NgIf,
  ],
  templateUrl: './report-goods.component.html',
  styleUrl: './report-goods.component.css',
})
export class ReportGoodsComponent implements OnInit {
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
