import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';

@Component({
  selector: 'app-create-partner',
  standalone: true,
  imports: [StepBoxComponent],
  templateUrl: './create-partner.component.html',
  styleUrl: './create-partner.component.css'
})
export class CreatePartnerComponent {
    constructor(private imageServices:ImageHandleService){}

    emitShowImageEvent(src:string,title:string){
      this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
    }

}
