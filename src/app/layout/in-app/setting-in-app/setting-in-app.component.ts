import { Component } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';
import { DescComponent } from '../../../shared/component/desc/desc.component';

@Component({
  selector: 'app-setting-in-app',
  standalone: true,
  imports: [GeneralInstructionsComponent,DescComponent],
  templateUrl: './setting-in-app.component.html',
  styleUrl: './setting-in-app.component.css'
})
export class SettingInAppComponent {

}
