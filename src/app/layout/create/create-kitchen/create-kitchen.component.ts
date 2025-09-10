import { Component } from '@angular/core';
import { ImageHandleService } from '../../../shared/services/image-handle/image-handle.service';
import { StepBoxComponent } from '../../../shared/component/step-box/step-box.component';

@Component({
  selector: 'app-create-kitchen',
  standalone: true,
  imports: [StepBoxComponent],
  templateUrl: './create-kitchen.component.html',
  styleUrl: './create-kitchen.component.css'
})
export class CreateKitchenComponent {
    constructor(private imageServices:ImageHandleService){}

    emitShowImageEvent(src:string,title:string){
      this.imageServices.emitShowImagedEvent({imageSrc:src,imageTitle:title});
    }
}
