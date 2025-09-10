import { Component } from '@angular/core';
import { GeneralInstructionsComponent } from '../general-instructions/general-instructions.component';

@Component({
  selector: 'app-setting-in-app',
  standalone: true,
  imports: [GeneralInstructionsComponent],
  templateUrl: './setting-in-app.component.html',
  styleUrl: './setting-in-app.component.css'
})
export class SettingInAppComponent {

}
