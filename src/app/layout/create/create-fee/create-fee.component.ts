import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';

@Component({
  selector: 'app-create-fee',
  standalone: true,
  imports: [StepBoxComponent],
  templateUrl: './create-fee.component.html',
  styleUrl: './create-fee.component.css'
})
export class CreateFeeComponent {
    constructor(private imageServices:ImageHandleService){}

    emitShowImageEvent(src:string,title:string){
      this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
    }

}
