import { Component, OnInit } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { IconHelpComponent } from '../../../shared/component/icon-help/icon-help.component';
import { HowComponent } from '../../../shared/component/how/how.component';
import { StepComponent } from '../../../shared/component/step/step.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    GeneralInstructionsComponent,
    IconHelpComponent,
    HowComponent,
    StepComponent,
    DescComponent,
    HttpClientModule
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {  }
}
