import { Component, OnInit } from '@angular/core';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { NoteComponent } from '../../../shared/component/note/note.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-fee-in-app',
  standalone: true,
  imports: [
    StepBoxComponent,
    GeneralInstructionsComponent,
    HowComponent,
    StepComponent,
    DescComponent,
    NoteComponent,
    NgIf,
  ],
  templateUrl: './fee-in-app.component.html',
  styleUrl: './fee-in-app.component.css',
})
export class FeeInAppComponent implements OnInit {
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
