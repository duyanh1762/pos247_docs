import { Component, OnInit } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-monitor',
  standalone: true,
  imports: [
    GeneralInstructionsComponent,
    StepComponent,
    HowComponent,
    DescComponent,
    NgIf,
  ],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.css',
})
export class MonitorComponent implements OnInit {
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
