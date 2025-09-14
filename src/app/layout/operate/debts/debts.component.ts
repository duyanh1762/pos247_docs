import { Component } from '@angular/core';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';

@Component({
  selector: 'app-debts',
  standalone: true,
  imports: [StepBoxComponent],
  templateUrl: './debts.component.html',
  styleUrl: './debts.component.css'
})
export class DebtsComponent {
      constructor(private imageServices:ImageHandleService){}

      emitShowImageEvent(src:string,title:string){
        this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
      }
}
