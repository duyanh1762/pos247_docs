import { Component, OnInit } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { NoteComponent } from '../../../shared/component/note/note.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-debts-in-app',
  standalone: true,
  imports: [
    GeneralInstructionsComponent,
    StepComponent,
    HowComponent,
    DescComponent,
    NoteComponent,
    NgIf,
  ],
  templateUrl: './debts-in-app.component.html',
  styleUrl: './debts-in-app.component.css',
})
export class DebtsInAppComponent implements OnInit {
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
